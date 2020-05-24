
import {ObjVisible} from "app/ObjVisible";
import {Protagoniste} from "app/Protagoniste";
import {Antagoniste} from "app/Antagoniste";
import {Obstacle} from "app/Obstacle";
import {Projectile} from "app/Projectile";
import {BtDepart} from "app/BtDepart";
import {BtFin} from "app/BtFin";
import {BarrePdV} from "app/BarrePdV";
import {DecorFixe} from "./DecorFixe";
import {DecorMobile} from "./DecorMobile";
import {AfficheurScore} from "./AfficheurScore";
import {MiniBoss} from "./MiniBoss";
import {Interface} from "./Interface";
import {SonAmbiant} from "./SonAmbiant";
import {SonTir} from "./SonTir";
import {SonHit} from "./SonHit";
import {SonDebut} from "./SonDebut";
import {SonFX} from "./SonFX";

export class Jeu {
    /* ----------------------------------------------------------------------------------------------------
    * ATTRIBUTS
    ---------------------------------------------------------------------------------------------------- */
    // ---- JEU ----
    private refStage:createjs.Stage = null;
    private boolJeuActif:boolean = null;
    private interface: Interface = null;
    private niveau: string = null;
    private refMinuterieTriage: number = null;

    // ---- PROTAGONISTE ----
    private leProtagoniste: Protagoniste= null;
    private barrePdV: BarrePdV = null;
    private afficheurScore: AfficheurScore = null;

    // ---- DECOR ----
    private decorFixe: DecorFixe = null;
    private decorMobile: DecorMobile = null;
    private decorMobile2: DecorMobile = null;

    // ---- ANTAGONISTES ----
    private refMinuterieAntagoniste: number = null;
    private refMinuterieObstacle: number = null;
    private arrAntagonistes: Array<Antagoniste> = new Array();
    private arrObstacles: Array<Obstacle> = new Array();
    private arrProjectiles: Array<Projectile> = new Array();

    // ---- SONS ----
    private sonAmbiant: SonAmbiant =null;
    private sonTir: SonFX =null;
    private sonHit: SonFX =null;
    private sonMortProtagoniste =null;
    private sonMortAntagoniste =null;
    private sonSpawnMiniBoss =null;
    private sonVictoire: SonFX =null;
    private sonDebut: SonFX =null;
    private sonTap: SonFX =null;

    /* ----------------------------------------------------------------------------------------------------
     * MÉTHODES
     ---------------------------------------------------------------------------------------------------- */
    public constructor(refStage:createjs.Stage) {
        // ---- LOAD STAGE ----
        this.refStage = refStage;
        this.interface = new Interface(this.refStage, this, 'acceuil', 0, 0);
        this.refStage.setChildIndex(this.interface, 21);

        // ---- LOAD SONS ----
        this.sonAmbiant = new SonAmbiant('./sons/ambiance_bgmusic.mp3',['mp3'],'bgMusic',1, -1);
        this.sonTir = new SonFX('./sons/sfx_tir.mp3',['mp3'],'sfxTir',10);
        this.sonHit = new SonFX('./sons/sfx_hit.mp3',['mp3'],'sfxHit',2);
        this.sonDebut = new SonFX('./sons/sfx_debutJeu.mp3',['mp3'],'sfxDebut',1);
        this.sonVictoire = new SonFX('./sons/sfx_victoire.mp3',['mp3'],'sfxVictoire',1);
        this.sonMortProtagoniste = new SonFX('./sons/sfx_protagonisteMort.mp3',['mp3'],'sfxMortProtagoniste',1);
        this.sonMortAntagoniste = new SonFX('./sons/sfx_antagonisteMort.mp3',['mp3'],'sfxMortAntagoniste',10);
        this.sonSpawnMiniBoss = new SonFX('./sons/sfx_rireDiabolique.mp3',['mp3'],'sfxBoss',10);
        this.sonTap = new SonFX('./sons/sfx_tap.mp3',['mp3'],'sfxTap',5);
    }

    /* ----------------------------------------------------------------------------------------------------
    * MÉTHODES CONTRÔLE DU JEU
    ---------------------------------------------------------------------------------------------------- */
    /*
    * Commencer le jeu. Initialise tout les objets du jeu, démarre le son d'ambiance et les minuteries servant
    * à créer les antagonistes et obstacles
    * param niveau:string = '1F' ou '2F' envoyé par l'interface selon le niveau.
    */
    public commencerJeu(niveau:string):void {
        this.boolJeuActif = true;
        this.niveau = niveau;
        this.refMinuterieTriage = window.setInterval(this.classerObjetsEnProfondeur.bind(this), 30);

        this.decorMobile = new DecorMobile(this.refStage, this.niveau, 0, 0);
        this.refStage.setChildIndex(this.decorMobile, 1);
        this.decorMobile2 = new DecorMobile(this.refStage, this.niveau, 1200, 0);
        this.refStage.setChildIndex(this.decorMobile, 1);
        this.decorFixe = new DecorFixe(this.refStage, this.niveau, 0, 0);
        this.refStage.setChildIndex(this.decorFixe, 1);

        this.afficheurScore = new AfficheurScore(this.refStage, this, this.niveau, 700, 20);

        this.refMinuterieAntagoniste = window.setInterval(this.creerVagueAntagonistes.bind(this), 5000);
        this.refMinuterieObstacle = window.setInterval(this.creerVagueObstacle.bind(this), 5000);

        this.leProtagoniste = new Protagoniste(this.refStage, this,75,300);
        this.barrePdV = new BarrePdV(this.refStage, 20, 20);

        this.creerVagueAntagonistes();
        this.creerVagueObstacle();


        // On veut des miniboss pour le 2e niveau!
        if(this.niveau == '2F') {
            setTimeout(this.creerMiniBoss.bind(this), 7000);
        }

        this.refStage.setChildIndex( this.leProtagoniste, 20);
        this.sonAmbiant.demarrerSon();
        this.sonDebut.demarrerSon();
    }

    /*
        * Terminer le jeu. Retire tout les objets de la scène et appel leur méthode de destruction individuelle
        * NE S'OCCUPE PAS DE L'INTERFACE
    */
    public terminerJeu():void {
        this.boolJeuActif = false;

        clearInterval(this.refMinuterieTriage);
        this.refMinuterieTriage = null;

        clearInterval(this.refMinuterieAntagoniste);
        this.refMinuterieAntagoniste = null;

        clearInterval(this.refMinuterieObstacle);
        this.refMinuterieObstacle = null;
        console.log(this.refMinuterieObstacle);

        this.leProtagoniste.arreterProtagoniste();
        this.leProtagoniste = null;

        while(this.arrAntagonistes.length>0) {
            this.arrAntagonistes[0].arreterAntagoniste();
            this.arrAntagonistes.splice(0, 1);
        }

        while(this.arrObstacles.length>0) {
            this.arrObstacles[0].arreterObstacle();
            this.arrObstacles.splice(0, 1);
        }

        while(this.arrProjectiles.length>0) {
            this.arrProjectiles[0].arreterProjectile();
            this.arrProjectiles.splice(0, 1);
        }

        this.barrePdV.arreterBarrePdV();
        this.barrePdV = null;

        this.decorMobile.arreterDecorMobile();
        this.decorMobile = null;

        this.decorMobile2.arreterDecorMobile();
        this.decorMobile2 = null;

        this.decorFixe.arreterDecorFixe();
        this.decorFixe = null;

        this.afficheurScore.arreterAfficheurScore();
        this.afficheurScore = null;

        if(this.niveau == '2F') {
            this.sonAmbiant.arreterSon();
        }
        console.log('Jeu terminé!');
    }

    /*
    * Appel terminerlejeu() avec les effets liés à la mort du protagoniste
    * Appel la méthode qui gère l'interface à la mort
    */
    public faireFinirSurMort():void {
        this.sonMortProtagoniste.demarrerSon();
        setTimeout(this.terminerJeu.bind(this), 2000);
        setTimeout(this.selectInterfaceMort.bind(this), 2000);
    }

    public faireGagner():void {
        setTimeout(this.terminerJeu.bind(this), 1000);
        console.log('NIVEAU TERMINÉ');
        setTimeout(this.gestionInterfaceVictoire.bind(this),1000);
    }

    private classerObjetsEnProfondeur():void{
        this.refStage.sortChildren(this.comparerY.bind(this));
        for(let i:number =0; i<this.arrObstacles.length; i++) {
            this.refStage.setChildIndex(this.arrObstacles[i], 2);
        }
    }

    private comparerY(a:createjs.MovieClip,b:createjs.MovieClip):Number{
        if (a.y > b.y )
            return 1;
        else if (a.y < b.y)
            return -1;
        else
            return 0;
    }

    /* ----------------------------------------------------------------------------------------------------
     * GESTION DE L'INTERFACE
     ---------------------------------------------------------------------------------------------------- */
    public jouerSonInterface():void {
        this.sonTap.demarrerSon();
    }

    /*
    * Gère l'interface à la mort du protagoniste
    */
    private selectInterfaceMort():void {
        this.refStage.addChild(this.interface);
        this.interface.selectInterface('mort');
        this.sonAmbiant.arreterSon();
    }

    /*
    * Gère l'interface à la complétion d'un niveau
    */
    public gestionInterfaceVictoire():void {
        this.refStage.addChild(this.interface);
        this.refStage.setChildIndex(this.interface, 800);
        if(this.niveau == '1F') {
            this.interface.selectInterface('2F');
        }
        else {
            this.interface.selectInterface('victoire');
            this.sonVictoire.demarrerSon();
        }
    }

    /* ----------------------------------------------------------------------------------------------------
     * CRÉATION D'OBJETS APRÈS LE DÉBUT DU JEU
     ---------------------------------------------------------------------------------------------------- */
    /* Création des objets mobiles automatiques
    * 1) À chaque 5s, une vague d'antagoniste et une vague d'obstacles sont créées.
    * 2) Dans ses vagues, un nombre d'antgonistes(5) ou d'obstacles(3) sont créés à interval aléatoir ne dépassant pas le 5s total.
    */
    // ---- ANTAGONISTES ----
    private creerVagueAntagonistes(): void {
        for(let i:number = 0; i<5; i++) {
            let randomTimeout: number = Math.floor(Math.random() * (4500-i*200))+ 500+i*200;
            window.setTimeout(this.creerUnAntagoniste.bind(this), randomTimeout);
        }
    }

    private creerUnAntagoniste():void {
        if(this.boolJeuActif == true) {
            let hauteurRandom:number = Math.floor(Math.random() * 225)+300;
            this.arrAntagonistes.push(new Antagoniste(this.refStage, this, this.leProtagoniste, 900, hauteurRandom));
        }

    }
    // ---- OBSTACLES ----
    private creerVagueObstacle(): void {
        for(let i:number = 0; i<3; i++) {
            let randomTimeout: number = Math.floor(Math.random() * (4500-i*200))+ 500+i*200;
            window.setTimeout(this.creerUnObstacle.bind(this), randomTimeout);
        }
    }

    private creerUnObstacle():void {
        if(this.boolJeuActif == true) {
            let hauteurRandom:number = Math.floor(Math.random() * 300)+250;
            this.arrObstacles.push(new Obstacle(this.refStage, this, this.leProtagoniste,920, hauteurRandom));
        }
    }

    // ---- MINIBOSS ----
    /*
    * Créer un miniboss en se basant sur le Y du protagoniste, puis se rappel avec un Timeout aléatoire entre 5 et 10 secondes.
    */
    private creerMiniBoss():void {
        if(this.boolJeuActif){
            console.log('BOSS SPAWN');
            this.sonSpawnMiniBoss.demarrerSon();
            let protagonisteY:number = this.leProtagoniste.retournerY();
            let senseDistance:number = Math.random() < 0.5 ? 1 : -1;
            let distance:number = Math.floor(Math.random() * 50);
            let hauteurRandom = protagonisteY + (senseDistance*distance);

            this.arrAntagonistes.push(new MiniBoss(this.refStage, this, this.leProtagoniste, 1000, hauteurRandom));

            let randomInterval:number = Math.floor(Math.random() * 5000)+5000;
            setTimeout(this.creerMiniBoss.bind(this), randomInterval);
        }
    }

    // ---- PROJECTILES ----
    public creerProjectile(fusilX, fusilY): void {
        if(this.boolJeuActif) {
            let nouveauProjectile: Projectile = new Projectile(this.refStage, this, this.leProtagoniste, this.arrAntagonistes, fusilX, fusilY);
            this.refStage.setChildIndex( nouveauProjectile, 6);
            this.arrProjectiles.push(nouveauProjectile);
            this.sonTir.demarrerSon();
        }
    }

    /* ----------------------------------------------------------------------------------------------------
     * GESTION DES COLLISIONS
     ---------------------------------------------------------------------------------------------------- */
    // ---- COLLISION PROJECTILE/FANTOME ----
    public enCollisionGrossiere(projectile):void {
        for(let i:number = 0; i<this.arrAntagonistes.length; i++) {
            let clipProjectile = projectile.getTransformedBounds();
            let clipAntagoniste = this.arrAntagonistes[i].getTransformedBounds();
            if(clipProjectile.intersects(clipAntagoniste)) {
                console.log('Fantôme éliminé!');
                projectile.toucher();
                this.sonMortAntagoniste.demarrerSon();
                this.arrAntagonistes[i].mourrir();
                this.incrementerScore();
            }
        }
    }

    /* ----------------------------------------------------------------------------------------------------
     * GESTION DES AFFICHEURS
     ---------------------------------------------------------------------------------------------------- */
    public majBarrePdV(pdv: string):void {
        if(pdv == '10'){
            this.barrePdV.resetBarre();
        }
        else {
            this.sonHit.demarrerSon();
            this.barrePdV.majBarre(pdv);
        }
    }

    public incrementerScore(): void {
        this.afficheurScore.incrementer();
    }


    /* ----------------------------------------------------------------------------------------------------
    * DESTRUCTION D'OBJET HORS FIN DE JEU
    ---------------------------------------------------------------------------------------------------- */
    public arreterObstacle(obstacle):void {
        let index:number = this.arrObstacles.indexOf(obstacle);
        this.arrObstacles.splice(index,1);
        obstacle.arreterObstacle();
    }

    public arreterProjectile(projectile):void {

        let index:number = this.arrObstacles.indexOf(projectile);
        this.arrProjectiles.splice(index,1);
        projectile.arreterProjectile();
    }

    public arreterAntagoniste(antagoniste):void {
        let index:number = this.arrAntagonistes.indexOf(antagoniste);
        if(index != -1) {
            this.arrAntagonistes.splice(index,1);
            antagoniste.arreterAntagoniste();
        }
    }
}





