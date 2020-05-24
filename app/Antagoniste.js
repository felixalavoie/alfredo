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
define(["require", "exports", "app/ObjMobileAuto"], function (require, exports, ObjMobileAuto_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Antagoniste = /** @class */ (function (_super) {
        __extends(Antagoniste, _super);
        function Antagoniste(refStage, refJeu, refProtagoniste, posX, posY) {
            var _this = _super.call(this, refStage, refJeu, refProtagoniste, posX, posY) || this;
            _this.vitesse = 8;
            _this.sense = -1;
            _this.boolEstActif = true;
            _this.refStage.setChildIndex(_this, 10);
            return _this;
        }
        Antagoniste.prototype.dessiner = function () {
            window.lib.clipAntagoniste.call(this);
            this.frameBounds = window.lib.clipAntagoniste.prototype.frameBounds;
        };
        Antagoniste.prototype.checkDestruction = function () {
            if (this.x < 10 && this.boolEstActif == true) {
                this.refJeu.arreterAntagoniste(this);
                this.boolEstActif = false;
            }
        };
        Antagoniste.prototype.detecterCollision = function () {
            //Demande au protagoniste de vérifier si il y a une collision
            var facteurDeRedimensionnement = 1.2 * (this.y / 400);
            var distance = facteurDeRedimensionnement * -25;
            if (this.y - this.refProtagoniste.retournerY() > distance) {
                this.refProtagoniste.enCollisionGrossiere(this);
            }
        };
        Antagoniste.prototype.desactiver = function () {
            this.removeEventListener('tick', this.detecterCollision_lier);
            this.detecterCollision_lier = null;
        };
        Antagoniste.prototype.mourrir = function () {
            this.gotoAndStop('mort');
            this.refJeu.arreterAntagoniste(this);
        };
        Antagoniste.prototype.arreterAntagoniste = function () {
            this.desactiver();
            setTimeout(this.arreterObjMobileAuto.bind(this), 700);
        };
        return Antagoniste;
    }(ObjMobileAuto_1.ObjMobileAuto));
    exports.Antagoniste = Antagoniste;
});
//# sourceMappingURL=Antagoniste.js.map