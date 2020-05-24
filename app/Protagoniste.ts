import {ObjVisible} from "app/ObjVisible";
import {ObjRedimension} from "./ObjRedimension";
import {Jeu} from "./Jeu";

export class Protagoniste extends ObjRedimension {
    /* ----------------------------------------------------------------------------------------------------
     * ATTRIBUTS
     ---------------------------------------------------------------------------------------------------- */
    // ---- RÉFÉRNCES ----
    private refJeu: Jeu = null;

    // ---- STATS ----
    private pdv : number = null;

    // ---- ETATS ----
    private boolEstActif: boolean = null;
    private boolEnFrein: boolean = null;
    private etat:string = null;
    private cooldownTir: boolean = null;

    // ---- MOUVEMENT ----
    private arrMvtKeys: Array<boolean> = [false,false,false,false];
    private refMinuterieMvt: number = null;
    private mvtX: number = 0;
    private mvtY: number = 0;

    // ---- COLLISION ----
    private arrPointsContact: Array<createjs.MovieClip> = null;

    /* ----------------------------------------------------------------------------------------------------
     * MÉTHODES
     ---------------------------------------------------------------------------------------------------- */
    public constructor(refStage:createjs.Stage, refJeu: Jeu, posX:number, posY:number)
    {
        super(refStage, posX, posY);
        this.refJeu = refJeu;
        this.boolEstActif = true;
        this.boolEnFrein = false;
        this.arrPointsContact = [this['mc_p1'], this['mc_p2'], this['mc_p3'], this['mc_p4']];
        this.pdv = 10;
        this.etat = 'normal';
        this.cooldownTir = true;

        window.onkeydown = this.gererKeyDown.bind(this);
        window.onkeyup = this.gererKeyUp.bind(this);

        this.gotoAndStop('normal');
    }

    protected dessiner():void {
        window.lib.clipProtagoniste.call(this);
        this.frameBounds = window.lib.clipProtagoniste.prototype.frameBounds;
    }

    // ---- UTILITÉ ----
    public retournerY():number {
        return this.y;
    }

    /* ----------------------------------------------------------------------------------------------------
     * GESTION DU MOUVEMENT
     ---------------------------------------------------------------------------------------------------- */
    // ESPACE = 32;
    // W = 87             // S = 83              // A = 65              // D = 68
    // FLECHE_HAUT = 38    // FLECHE_BAS = 40     // FLECHE_GAUCHE = 37  // FLECHE_DROITE = 39

    private gererKeyDown(evenement:KeyboardEvent):void {
        evenement.preventDefault(); // Prévenir le déplacement de la fenêtre du navigateur lorsque la flèche est enfoncée.
        switch (evenement.keyCode)
        {
            case 32:
                console.log('PEW!');
                this.tirer();
                this.cooldownTir = false;
                break;

            case 87:
            case 38 :
                this.arrMvtKeys[0] = true;
                this.mvtY = -1.5;
                break;

            case 68:
            case 39 :
                this.arrMvtKeys[1] = true;
                this.mvtX = 1.5;
                break;

            case 83:
            case 40 :
                this.arrMvtKeys[2] = true;
                this.mvtY = 1.5;
                // this.redimensionner();
                break;

            case 65:
            case 37 :
                this.arrMvtKeys[3] = true;
                this.mvtX = -1.5;
                if(this.boolEnFrein == false && this.boolEstActif == true){
                    this.boolEnFrein = true;
                    this.etat = 'frein';
                    this.gotoAndStop('frein');
                }
                break;
        };

        // Annule le mouvement si 2 touches opposées sont enfoncées
        if(this.arrMvtKeys[0] == true && this.arrMvtKeys[2] == true){
            this.mvtY = 0;
        }
        if(this.arrMvtKeys[1] == true && this.arrMvtKeys[3] == true){
            this.mvtX = 0;
        }
        this.gererMinuterie();
    }

    private gererKeyUp(evenement:KeyboardEvent):void {
        evenement.preventDefault(); // Prévenir le déplacement de la fenêtre du navigateur lorsque la flèche est enfoncée.
        switch (evenement.keyCode)
        {
            case 87:
            case 38 :
                this.arrMvtKeys[0] = false;
                this.mvtY=0;
                break;

            case 68:
            case 39:
                this.arrMvtKeys[1] = false;
                this.mvtX=0;
                break;

            case 83:
            case 40:
                this.arrMvtKeys[2] = false;
                this.mvtY=0;
                break;

            case 65:
            case 37:
                this.arrMvtKeys[3] = false;
                this.mvtX=0;
                if(this.boolEnFrein == true && this.boolEstActif == true){
                    this.boolEnFrein = false;
                    this.etat = 'retourFrein';
                    this.gotoAndStop('retourFrein');
                    setTimeout(this.retourNormal.bind(this), 250);
                }
                break;
        }
        // Enlève la minuterie si aucune touche de mouvement n'est enfoncée
        if(this.arrMvtKeys.indexOf(true) == -1) {
            clearInterval(this.refMinuterieMvt);
            this.refMinuterieMvt = null;
        }
    }

    private gererMinuterie():void {
        if(this.arrMvtKeys.indexOf(true) != -1) {
            if(this.refMinuterieMvt == null) {
                this.refMinuterieMvt = window.setInterval(this.bouger.bind(this), 10);
            }
        }
        else {
            this.refMinuterieMvt = null;
        }
    }

    private bouger():void {
        // On limite la zone de jeu
        if(this.x + this.mvtX >= 50 && this.x + this.mvtX<= 750){
            this.x = this.x + this.mvtX;
        }

        if(this.y + this.mvtY >= 260 && this.y + this.mvtY <= 575){
            this.y = this.y + this.mvtY;
        }

        // On redimensionne lors d'un changement de Y seulement ( pas besoin pour un changement de X)
        if(this.mvtY != 0){
            this.redimensionner();
        }
    }

    /* ----------------------------------------------------------------------------------------------------
    * GESTION DES COLLISIONS
    ---------------------------------------------------------------------------------------------------- */
    /*
     * Detection de collision grossiere (appelé par chacun des antagonistes et obstacles au 'tick'
     * param refDemandeur = antagoniste ou obstacle appelant la fonction
     * La fonctionne finit par soit appeler la détection fine, ou ne rien faire s'il n'y a pas de collision grossière.
     */
    public enCollisionGrossiere(refDemandeur:createjs.MovieClip):void {
        if(this.boolEstActif == true) {
            let monClip = this.getTransformedBounds();
            let clipDemandeur = refDemandeur.getTransformedBounds();
            if(monClip.intersects(clipDemandeur) && this.boolEstActif == true) {
                console.log('Protagoniste en collision grossière');
                this.enCollisionFine(refDemandeur);
            }
        }
    }

    //detection de collision initialiser par la détection d'une collision grossière
    public enCollisionFine(refDemandeur:createjs.MovieClip):void {
        for (let i:number = 0; i<this.arrPointsContact.length; i++) {
            let monPoint:createjs.MovieClip = this.arrPointsContact[i];
            let monPointLocalAuDemandeur:createjs.Point = monPoint.parent.localToLocal(monPoint.x, monPoint.y, refDemandeur);
            if (refDemandeur.hitTest(monPointLocalAuDemandeur.x, monPointLocalAuDemandeur.y) && this.boolEstActif == true) {
                console.log('Protagoniste en collision fine');
                this.perdrePdV();
                this.boolEstActif = false;
            }
        }
    }

    /* ----------------------------------------------------------------------------------------------------
    * GESTION DES ÉTATS
    ---------------------------------------------------------------------------------------------------- */
    /*
     * Appelé par la détection d'une collision fine. Série d'actions prises lorsque le protagoniste perd de la vie
     * a) Décrémenter les points de vue du protagoniste
     * b) Stringify la valeur des PdV pour la passer au Jeu>AfficheurPdV (elle est utilisée comme étiquette)
     * c) Change les états
     * d) Jouer l'animation de prise de dommage ou faire mourrir si les PdV tombent à 0
     */
    private perdrePdV():void {
        if(this.boolEstActif == true) {
            this.pdv --;
            let presentPdV = this.pdv.toString();

            this.refJeu.majBarrePdV(presentPdV);
            this.boolEnFrein = false;
            this.etat = 'hit';

            if(this.pdv == 0) {
                this.mourrir();
            }
            else{
                this.gotoAndStop('hit');
                // Reset les états et revient à l'animation normale
                setTimeout(this.enleverImmunite.bind(this), 1500);
            }
        }
    }

    /*
     * Appelé par la perte de PdV lorsque this.pdv = 0
     * Jouer l'animation de mort, puis avise le jeu que le personnage est mort.
     */
    private mourrir():void {
        console.log('----- GAME OVER -----');
        this.gotoAndStop('mort');
        this.boolEstActif = false;
        this.refJeu.faireFinirSurMort();
    }

    private enleverImmunite():void {
        this.boolEstActif = true;
        this.etat = 'normal';
        this.gotoAndStop('normal');
    }

    private enleverCooldown():void {
        this.cooldownTir = true;
    }

    private fusilRevenirNormal():void {
        let currentAnim: string = this.etat + '_mc';
        this[currentAnim]['fusil_mc'].gotoAndStop('normal');
    }

    private retourNormal():void {
        this.gotoAndStop('normal');
        this.etat = 'normal';
    }

    /* ----------------------------------------------------------------------------------------------------
    * GESTION DES TIRS
    ---------------------------------------------------------------------------------------------------- */
    private tirer():void {
        //Gestion de l'animation de tire
        if(this.cooldownTir == true) {
            let currentAnim: string = this.etat + '_mc';
            let fusil: any = this[currentAnim]['fusil_mc'];
            fusil.gotoAndStop('tire');
            setTimeout(this.fusilRevenirNormal.bind(this), 150);

            let monPointLocalAuDemandeur:createjs.Point = fusil.parent.localToLocal(fusil.x, fusil.y, this.refStage);

            let fusilX:number = monPointLocalAuDemandeur.x;
            let fusilY:number = monPointLocalAuDemandeur.y;
            //    Creation du projectile
            this.refJeu.creerProjectile(fusilX, fusilY);
            setTimeout(this.enleverCooldown.bind(this), 400);
        }
    }

    public arreterProtagoniste():void {
        this.arreterObjRedimension();
    }
}