define(["require", "exports", "app/Protagoniste", "app/Antagoniste", "app/Obstacle", "app/Projectile", "app/BarrePdV", "./DecorFixe", "./DecorMobile", "./AfficheurScore", "./MiniBoss", "./Interface", "./SonAmbiant", "./SonFX"], function (require, exports, Protagoniste_1, Antagoniste_1, Obstacle_1, Projectile_1, BarrePdV_1, DecorFixe_1, DecorMobile_1, AfficheurScore_1, MiniBoss_1, Interface_1, SonAmbiant_1, SonFX_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Jeu = /** @class */ (function () {
        /* ----------------------------------------------------------------------------------------------------
         * MÉTHODES
         ---------------------------------------------------------------------------------------------------- */
        function Jeu(refStage) {
            /* ----------------------------------------------------------------------------------------------------
            * ATTRIBUTS
            ---------------------------------------------------------------------------------------------------- */
            // ---- JEU ----
            this.refStage = null;
            this.boolJeuActif = null;
            this.interface = null;
            this.niveau = null;
            this.refMinuterieTriage = null;
            // ---- PROTAGONISTE ----
            this.leProtagoniste = null;
            this.barrePdV = null;
            this.afficheurScore = null;
            // ---- DECOR ----
            this.decorFixe = null;
            this.decorMobile = null;
            this.decorMobile2 = null;
            // ---- ANTAGONISTES ----
            this.refMinuterieAntagoniste = null;
            this.refMinuterieObstacle = null;
            this.arrAntagonistes = new Array();
            this.arrObstacles = new Array();
            this.arrProjectiles = new Array();
            // ---- SONS ----
            this.sonAmbiant = null;
            this.sonTir = null;
            this.sonHit = null;
            this.sonMortProtagoniste = null;
            this.sonMortAntagoniste = null;
            this.sonSpawnMiniBoss = null;
            this.sonVictoire = null;
            this.sonDebut = null;
            this.sonTap = null;
            // ---- LOAD STAGE ----
            this.refStage = refStage;
            this.interface = new Interface_1.Interface(this.refStage, this, 'acceuil', 0, 0);
            this.refStage.setChildIndex(this.interface, 21);
            // ---- LOAD SONS ----
            this.sonAmbiant = new SonAmbiant_1.SonAmbiant('./sons/ambiance_bgmusic.mp3', ['mp3'], 'bgMusic', 1, -1);
            this.sonTir = new SonFX_1.SonFX('./sons/sfx_tir.mp3', ['mp3'], 'sfxTir', 10);
            this.sonHit = new SonFX_1.SonFX('./sons/sfx_hit.mp3', ['mp3'], 'sfxHit', 2);
            this.sonDebut = new SonFX_1.SonFX('./sons/sfx_debutJeu.mp3', ['mp3'], 'sfxDebut', 1);
            this.sonVictoire = new SonFX_1.SonFX('./sons/sfx_victoire.mp3', ['mp3'], 'sfxVictoire', 1);
            this.sonMortProtagoniste = new SonFX_1.SonFX('./sons/sfx_protagonisteMort.mp3', ['mp3'], 'sfxMortProtagoniste', 1);
            this.sonMortAntagoniste = new SonFX_1.SonFX('./sons/sfx_antagonisteMort.mp3', ['mp3'], 'sfxMortAntagoniste', 10);
            this.sonSpawnMiniBoss = new SonFX_1.SonFX('./sons/sfx_rireDiabolique.mp3', ['mp3'], 'sfxBoss', 10);
            this.sonTap = new SonFX_1.SonFX('./sons/sfx_tap.mp3', ['mp3'], 'sfxTap', 5);
        }
        /* ----------------------------------------------------------------------------------------------------
        * MÉTHODES CONTRÔLE DU JEU
        ---------------------------------------------------------------------------------------------------- */
        /*
        * Commencer le jeu. Initialise tout les objets du jeu, démarre le son d'ambiance et les minuteries servant
        * à créer les antagonistes et obstacles
        * param niveau:string = '1F' ou '2F' envoyé par l'interface selon le niveau.
        */
        Jeu.prototype.commencerJeu = function (niveau) {
            this.boolJeuActif = true;
            this.niveau = niveau;
            this.refMinuterieTriage = window.setInterval(this.classerObjetsEnProfondeur.bind(this), 30);
            this.decorMobile = new DecorMobile_1.DecorMobile(this.refStage, this.niveau, 0, 0);
            this.refStage.setChildIndex(this.decorMobile, 1);
            this.decorMobile2 = new DecorMobile_1.DecorMobile(this.refStage, this.niveau, 1200, 0);
            this.refStage.setChildIndex(this.decorMobile, 1);
            this.decorFixe = new DecorFixe_1.DecorFixe(this.refStage, this.niveau, 0, 0);
            this.refStage.setChildIndex(this.decorFixe, 1);
            this.afficheurScore = new AfficheurScore_1.AfficheurScore(this.refStage, this, this.niveau, 700, 20);
            this.refMinuterieAntagoniste = window.setInterval(this.creerVagueAntagonistes.bind(this), 5000);
            this.refMinuterieObstacle = window.setInterval(this.creerVagueObstacle.bind(this), 5000);
            this.leProtagoniste = new Protagoniste_1.Protagoniste(this.refStage, this, 75, 300);
            this.barrePdV = new BarrePdV_1.BarrePdV(this.refStage, 20, 20);
            this.creerVagueAntagonistes();
            this.creerVagueObstacle();
            // On veut des miniboss pour le 2e niveau!
            if (this.niveau == '2F') {
                setTimeout(this.creerMiniBoss.bind(this), 7000);
            }
            this.refStage.setChildIndex(this.leProtagoniste, 20);
            this.sonAmbiant.demarrerSon();
            this.sonDebut.demarrerSon();
        };
        /*
            * Terminer le jeu. Retire tout les objets de la scène et appel leur méthode de destruction individuelle
            * NE S'OCCUPE PAS DE L'INTERFACE
        */
        Jeu.prototype.terminerJeu = function () {
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
            while (this.arrAntagonistes.length > 0) {
                this.arrAntagonistes[0].arreterAntagoniste();
                this.arrAntagonistes.splice(0, 1);
            }
            while (this.arrObstacles.length > 0) {
                this.arrObstacles[0].arreterObstacle();
                this.arrObstacles.splice(0, 1);
            }
            while (this.arrProjectiles.length > 0) {
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
            if (this.niveau == '2F') {
                this.sonAmbiant.arreterSon();
            }
            console.log('Jeu terminé!');
        };
        /*
        * Appel terminerlejeu() avec les effets liés à la mort du protagoniste
        * Appel la méthode qui gère l'interface à la mort
        */
        Jeu.prototype.faireFinirSurMort = function () {
            this.sonMortProtagoniste.demarrerSon();
            setTimeout(this.terminerJeu.bind(this), 2000);
            setTimeout(this.selectInterfaceMort.bind(this), 2000);
        };
        Jeu.prototype.faireGagner = function () {
            setTimeout(this.terminerJeu.bind(this), 1000);
            console.log('NIVEAU TERMINÉ');
            setTimeout(this.gestionInterfaceVictoire.bind(this), 1000);
        };
        Jeu.prototype.classerObjetsEnProfondeur = function () {
            this.refStage.sortChildren(this.comparerY.bind(this));
            for (var i = 0; i < this.arrObstacles.length; i++) {
                this.refStage.setChildIndex(this.arrObstacles[i], 2);
            }
        };
        Jeu.prototype.comparerY = function (a, b) {
            if (a.y > b.y)
                return 1;
            else if (a.y < b.y)
                return -1;
            else
                return 0;
        };
        /* ----------------------------------------------------------------------------------------------------
         * GESTION DE L'INTERFACE
         ---------------------------------------------------------------------------------------------------- */
        Jeu.prototype.jouerSonInterface = function () {
            this.sonTap.demarrerSon();
        };
        /*
        * Gère l'interface à la mort du protagoniste
        */
        Jeu.prototype.selectInterfaceMort = function () {
            this.refStage.addChild(this.interface);
            this.interface.selectInterface('mort');
            this.sonAmbiant.arreterSon();
        };
        /*
        * Gère l'interface à la complétion d'un niveau
        */
        Jeu.prototype.gestionInterfaceVictoire = function () {
            this.refStage.addChild(this.interface);
            this.refStage.setChildIndex(this.interface, 800);
            if (this.niveau == '1F') {
                this.interface.selectInterface('2F');
            }
            else {
                this.interface.selectInterface('victoire');
                this.sonVictoire.demarrerSon();
            }
        };
        /* ----------------------------------------------------------------------------------------------------
         * CRÉATION D'OBJETS APRÈS LE DÉBUT DU JEU
         ---------------------------------------------------------------------------------------------------- */
        /* Création des objets mobiles automatiques
        * 1) À chaque 5s, une vague d'antagoniste et une vague d'obstacles sont créées.
        * 2) Dans ses vagues, un nombre d'antgonistes(5) ou d'obstacles(3) sont créés à interval aléatoir ne dépassant pas le 5s total.
        */
        // ---- ANTAGONISTES ----
        Jeu.prototype.creerVagueAntagonistes = function () {
            for (var i = 0; i < 5; i++) {
                var randomTimeout = Math.floor(Math.random() * (4500 - i * 200)) + 500 + i * 200;
                window.setTimeout(this.creerUnAntagoniste.bind(this), randomTimeout);
            }
        };
        Jeu.prototype.creerUnAntagoniste = function () {
            if (this.boolJeuActif == true) {
                var hauteurRandom = Math.floor(Math.random() * 225) + 300;
                this.arrAntagonistes.push(new Antagoniste_1.Antagoniste(this.refStage, this, this.leProtagoniste, 900, hauteurRandom));
            }
        };
        // ---- OBSTACLES ----
        Jeu.prototype.creerVagueObstacle = function () {
            for (var i = 0; i < 3; i++) {
                var randomTimeout = Math.floor(Math.random() * (4500 - i * 200)) + 500 + i * 200;
                window.setTimeout(this.creerUnObstacle.bind(this), randomTimeout);
            }
        };
        Jeu.prototype.creerUnObstacle = function () {
            if (this.boolJeuActif == true) {
                var hauteurRandom = Math.floor(Math.random() * 300) + 250;
                this.arrObstacles.push(new Obstacle_1.Obstacle(this.refStage, this, this.leProtagoniste, 920, hauteurRandom));
            }
        };
        // ---- MINIBOSS ----
        /*
        * Créer un miniboss en se basant sur le Y du protagoniste, puis se rappel avec un Timeout aléatoire entre 5 et 10 secondes.
        */
        Jeu.prototype.creerMiniBoss = function () {
            if (this.boolJeuActif) {
                console.log('BOSS SPAWN');
                this.sonSpawnMiniBoss.demarrerSon();
                var protagonisteY = this.leProtagoniste.retournerY();
                var senseDistance = Math.random() < 0.5 ? 1 : -1;
                var distance = Math.floor(Math.random() * 50);
                var hauteurRandom = protagonisteY + (senseDistance * distance);
                this.arrAntagonistes.push(new MiniBoss_1.MiniBoss(this.refStage, this, this.leProtagoniste, 1000, hauteurRandom));
                var randomInterval = Math.floor(Math.random() * 5000) + 5000;
                setTimeout(this.creerMiniBoss.bind(this), randomInterval);
            }
        };
        // ---- PROJECTILES ----
        Jeu.prototype.creerProjectile = function (fusilX, fusilY) {
            if (this.boolJeuActif) {
                var nouveauProjectile = new Projectile_1.Projectile(this.refStage, this, this.leProtagoniste, this.arrAntagonistes, fusilX, fusilY);
                this.refStage.setChildIndex(nouveauProjectile, 6);
                this.arrProjectiles.push(nouveauProjectile);
                this.sonTir.demarrerSon();
            }
        };
        /* ----------------------------------------------------------------------------------------------------
         * GESTION DES COLLISIONS
         ---------------------------------------------------------------------------------------------------- */
        // ---- COLLISION PROJECTILE/FANTOME ----
        Jeu.prototype.enCollisionGrossiere = function (projectile) {
            for (var i = 0; i < this.arrAntagonistes.length; i++) {
                var clipProjectile = projectile.getTransformedBounds();
                var clipAntagoniste = this.arrAntagonistes[i].getTransformedBounds();
                if (clipProjectile.intersects(clipAntagoniste)) {
                    console.log('Fantôme éliminé!');
                    projectile.toucher();
                    this.sonMortAntagoniste.demarrerSon();
                    this.arrAntagonistes[i].mourrir();
                    this.incrementerScore();
                }
            }
        };
        /* ----------------------------------------------------------------------------------------------------
         * GESTION DES AFFICHEURS
         ---------------------------------------------------------------------------------------------------- */
        Jeu.prototype.majBarrePdV = function (pdv) {
            if (pdv == '10') {
                this.barrePdV.resetBarre();
            }
            else {
                this.sonHit.demarrerSon();
                this.barrePdV.majBarre(pdv);
            }
        };
        Jeu.prototype.incrementerScore = function () {
            this.afficheurScore.incrementer();
        };
        /* ----------------------------------------------------------------------------------------------------
        * DESTRUCTION D'OBJET HORS FIN DE JEU
        ---------------------------------------------------------------------------------------------------- */
        Jeu.prototype.arreterObstacle = function (obstacle) {
            var index = this.arrObstacles.indexOf(obstacle);
            this.arrObstacles.splice(index, 1);
            obstacle.arreterObstacle();
        };
        Jeu.prototype.arreterProjectile = function (projectile) {
            var index = this.arrObstacles.indexOf(projectile);
            this.arrProjectiles.splice(index, 1);
            projectile.arreterProjectile();
        };
        Jeu.prototype.arreterAntagoniste = function (antagoniste) {
            var index = this.arrAntagonistes.indexOf(antagoniste);
            if (index != -1) {
                this.arrAntagonistes.splice(index, 1);
                antagoniste.arreterAntagoniste();
            }
        };
        return Jeu;
    }());
    exports.Jeu = Jeu;
});
//# sourceMappingURL=Jeu.js.map