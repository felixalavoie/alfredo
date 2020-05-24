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
    var Projectile = /** @class */ (function (_super) {
        __extends(Projectile, _super);
        function Projectile(refStage, refJeu, refProtagoniste, arrAntagonistes, posX, posY) {
            var _this = _super.call(this, refStage, refJeu, refProtagoniste, posX, posY) || this;
            _this.vitesse = 20;
            _this.sense = 1;
            _this.boolEstActif = true;
            return _this;
        }
        Projectile.prototype.dessiner = function () {
            window.lib.clipProjectile.call(this);
            this.frameBounds = window.lib.clipProjectile.prototype.frameBounds;
        };
        Projectile.prototype.checkDestruction = function () {
            if (this.x > 825 && this.boolEstActif == true) {
                this.refJeu.arreterProjectile(this);
                this.boolEstActif = false;
            }
        };
        Projectile.prototype.detecterCollision = function () {
            //Demande au protagoniste de vérifier si il y a une collision
            this.refJeu.enCollisionGrossiere(this);
        };
        Projectile.prototype.toucher = function () {
            //    jouer son
            setTimeout(this.arreterProjectile.bind(this), 10);
        };
        Projectile.prototype.arreterProjectile = function () {
            this.arreterObjMobileAuto();
        };
        return Projectile;
    }(ObjMobileAuto_1.ObjMobileAuto));
    exports.Projectile = Projectile;
});
//# sourceMappingURL=Projectile.js.map