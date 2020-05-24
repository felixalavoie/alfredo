var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./ObjRedimension"], function (require, exports, ObjRedimension_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Protagoniste = /** @class */ (function (_super) {
        __extends(Protagoniste, _super);
        /* ----------------------------------------------------------------------------------------------------
         * MÉTHODES
         ---------------------------------------------------------------------------------------------------- */
        function Protagoniste(refStage, refJeu, posX, posY) {
            var _this = _super.call(this, refStage, posX, posY) || this;
            /* ----------------------------------------------------------------------------------------------------
             * ATTRIBUTS
             ---------------------------------------------------------------------------------------------------- */
            // ---- RÉFÉRNCES ----
            _this.refJeu = null;
            // ---- STATS ----
            _this.pdv = null;
            // ---- ETATS ----
            _this.boolEstActif = null;
            _this.boolEnFrein = null;
            _this.etat = null;
            _this.cooldownTir = null;
            // ---- MOUVEMENT ----
            _this.arrMvtKeys = [false, false, false, false];
            _this.refMinuterieMvt = null;
            _this.mvtX = 0;
            _this.mvtY = 0;
            // ---- COLLISION ----
            _this.arrPointsContact = null;
            _this.refJeu = refJeu;
            _this.boolEstActif = true;
            _this.boolEnFrein = false;
            _this.arrPointsContact = [_this['mc_p1'], _this['mc_p2'], _this['mc_p3'], _this['mc_p4']];
            _this.pdv = 10;
            _this.etat = 'normal';
            _this.cooldownTir = true;
            window.onkeydown = _this.gererKeyDown.bind(_this);
            window.onkeyup = _this.gererKeyUp.bind(_this);
            _this.gotoAndStop('normal');
            return _this;
        }
        Protagoniste.prototype.dessiner = function () {
            window.lib.clipProtagoniste.call(this);
            this.frameBounds = window.lib.clipProtagoniste.prototype.frameBounds;
        };
        // ---- UTILITÉ ----
        Protagoniste.prototype.retournerY = function () {
            return this.y;
        };
        /* ----------------------------------------------------------------------------------------------------
         * GESTION DU MOUVEMENT
         ---------------------------------------------------------------------------------------------------- */
        // ESPACE = 32;
        // W = 87             // S = 83              // A = 65              // D = 68
        // FLECHE_HAUT = 38    // FLECHE_BAS = 40     // FLECHE_GAUCHE = 37  // FLECHE_DROITE = 39
        Protagoniste.prototype.gererKeyDown = function (evenement) {
            evenement.preventDefault(); // Prévenir le déplacement de la fenêtre du navigateur lorsque la flèche est enfoncée.
            switch (evenement.keyCode) {
                case 32:
                    console.log('PEW!');
                    this.tirer();
                    this.cooldownTir = false;
                    break;
                case 87:
                case 38:
                    this.arrMvtKeys[0] = true;
                    this.mvtY = -1.5;
                    break;
                case 68:
                case 39:
                    this.arrMvtKeys[1] = true;
                    this.mvtX = 1.5;
                    break;
                case 83:
                case 40:
                    this.arrMvtKeys[2] = true;
                    this.mvtY = 1.5;
                    // this.redimensionner();
                    break;
                case 65:
                case 37:
                    this.arrMvtKeys[3] = true;
                    this.mvtX = -1.5;
                    if (this.boolEnFrein == false && this.boolEstActif == true) {
                        this.boolEnFrein = true;
                        this.etat = 'frein';
                        this.gotoAndStop('frein');
                    }
                    break;
            }
            ;
            // Annule le mouvement si 2 touches opposées sont enfoncées
            if (this.arrMvtKeys[0] == true && this.arrMvtKeys[2] == true) {
                this.mvtY = 0;
            }
            if (this.arrMvtKeys[1] == true && this.arrMvtKeys[3] == true) {
                this.mvtX = 0;
            }
            this.gererMinuterie();
        };
        Protagoniste.prototype.gererKeyUp = function (evenement) {
            evenement.preventDefault(); // Prévenir le déplacement de la fenêtre du navigateur lorsque la flèche est enfoncée.
            switch (evenement.keyCode) {
                case 87:
                case 38:
                    this.arrMvtKeys[0] = false;
                    this.mvtY = 0;
                    break;
                case 68:
                case 39:
                    this.arrMvtKeys[1] = false;
                    this.mvtX = 0;
                    break;
                case 83:
                case 40:
                    this.arrMvtKeys[2] = false;
                    this.mvtY = 0;
                    break;
                case 65:
                case 37:
                    this.arrMvtKeys[3] = false;
                    this.mvtX = 0;
                    if (this.boolEnFrein == true && this.boolEstActif == true) {
                        this.boolEnFrein = false;
                        this.etat = 'retourFrein';
                        this.gotoAndStop('retourFrein');
                        setTimeout(this.retourNormal.bind(this), 250);
                    }
                    break;
            }
            // Enlève la minuterie si aucune touche de mouvement n'est enfoncée
            if (this.arrMvtKeys.indexOf(true) == -1) {
                clearInterval(this.refMinuterieMvt);
                this.refMinuterieMvt = null;
            }
        };
        Protagoniste.prototype.gererMinuterie = function () {
            if (this.arrMvtKeys.indexOf(true) != -1) {
                if (this.refMinuterieMvt == null) {
                    this.refMinuterieMvt = window.setInterval(this.bouger.bind(this), 10);
                }
            }
            else {
                this.refMinuterieMvt = null;
            }
        };
        Protagoniste.prototype.bouger = function () {
            // On limite la zone de jeu
            if (this.x + this.mvtX >= 50 && this.x + this.mvtX <= 750) {
                this.x = this.x + this.mvtX;
            }
            if (this.y + this.mvtY >= 260 && this.y + this.mvtY <= 575) {
                this.y = this.y + this.mvtY;
            }
            // On redimensionne lors d'un changement de Y seulement ( pas besoin pour un changement de X)
            if (this.mvtY != 0) {
                this.redimensionner();
            }
        };
        /* ----------------------------------------------------------------------------------------------------
        * GESTION DES COLLISIONS
        ---------------------------------------------------------------------------------------------------- */
        /*
         * Detection de collision grossiere (appelé par chacun des antagonistes et obstacles au 'tick'
         * param refDemandeur = antagoniste ou obstacle appelant la fonction
         * La fonctionne finit par soit appeler la détection fine, ou ne rien faire s'il n'y a pas de collision grossière.
         */
        Protagoniste.prototype.enCollisionGrossiere = function (refDemandeur) {
            if (this.boolEstActif == true) {
                var monClip = this.getTransformedBounds();
                var clipDemandeur = refDemandeur.getTransformedBounds();
                if (monClip.intersects(clipDemandeur) && this.boolEstActif == true) {
                    console.log('Protagoniste en collision grossière');
                    this.enCollisionFine(refDemandeur);
                }
            }
        };
        //detection de collision initialiser par la détection d'une collision grossière
        Protagoniste.prototype.enCollisionFine = function (refDemandeur) {
            for (var i = 0; i < this.arrPointsContact.length; i++) {
                var monPoint = this.arrPointsContact[i];
                var monPointLocalAuDemandeur = monPoint.parent.localToLocal(monPoint.x, monPoint.y, refDemandeur);
                if (refDemandeur.hitTest(monPointLocalAuDemandeur.x, monPointLocalAuDemandeur.y) && this.boolEstActif == true) {
                    console.log('Protagoniste en collision fine');
                    this.perdrePdV();
                    this.boolEstActif = false;
                }
            }
        };
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
        Protagoniste.prototype.perdrePdV = function () {
            if (this.boolEstActif == true) {
                this.pdv--;
                var presentPdV = this.pdv.toString();
                this.refJeu.majBarrePdV(presentPdV);
                this.boolEnFrein = false;
                this.etat = 'hit';
                if (this.pdv == 0) {
                    this.mourrir();
                }
                else {
                    this.gotoAndStop('hit');
                    // Reset les états et revient à l'animation normale
                    setTimeout(this.enleverImmunite.bind(this), 1500);
                }
            }
        };
        /*
         * Appelé par la perte de PdV lorsque this.pdv = 0
         * Jouer l'animation de mort, puis avise le jeu que le personnage est mort.
         */
        Protagoniste.prototype.mourrir = function () {
            console.log('----- GAME OVER -----');
            this.gotoAndStop('mort');
            this.boolEstActif = false;
            this.refJeu.faireFinirSurMort();
        };
        Protagoniste.prototype.enleverImmunite = function () {
            this.boolEstActif = true;
            this.etat = 'normal';
            this.gotoAndStop('normal');
        };
        Protagoniste.prototype.enleverCooldown = function () {
            this.cooldownTir = true;
        };
        Protagoniste.prototype.fusilRevenirNormal = function () {
            var currentAnim = this.etat + '_mc';
            this[currentAnim]['fusil_mc'].gotoAndStop('normal');
        };
        Protagoniste.prototype.retourNormal = function () {
            this.gotoAndStop('normal');
            this.etat = 'normal';
        };
        /* ----------------------------------------------------------------------------------------------------
        * GESTION DES TIRS
        ---------------------------------------------------------------------------------------------------- */
        Protagoniste.prototype.tirer = function () {
            //Gestion de l'animation de tire
            if (this.cooldownTir == true) {
                var currentAnim = this.etat + '_mc';
                var fusil = this[currentAnim]['fusil_mc'];
                fusil.gotoAndStop('tire');
                setTimeout(this.fusilRevenirNormal.bind(this), 150);
                var monPointLocalAuDemandeur = fusil.parent.localToLocal(fusil.x, fusil.y, this.refStage);
                var fusilX = monPointLocalAuDemandeur.x;
                var fusilY = monPointLocalAuDemandeur.y;
                //    Creation du projectile
                this.refJeu.creerProjectile(fusilX, fusilY);
                setTimeout(this.enleverCooldown.bind(this), 400);
            }
        };
        Protagoniste.prototype.arreterProtagoniste = function () {
            this.arreterObjRedimension();
        };
        return Protagoniste;
    }(ObjRedimension_1.ObjRedimension));
    exports.Protagoniste = Protagoniste;
});
//# sourceMappingURL=Protagoniste.js.map