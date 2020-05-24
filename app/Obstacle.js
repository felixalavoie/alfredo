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
    var Obstacle = /** @class */ (function (_super) {
        __extends(Obstacle, _super);
        function Obstacle(refStage, refJeu, refProtagoniste, posX, posY) {
            var _this = _super.call(this, refStage, refJeu, refProtagoniste, posX, posY) || this;
            _this.vitesse = 4;
            _this.sense = -1;
            _this.boolEstActif = true;
            _this.refStage.setChildIndex(_this, 2);
            return _this;
        }
        Obstacle.prototype.dessiner = function () {
            window.lib.clipObstacle.call(this);
            this.frameBounds = window.lib.clipObstacle.prototype.frameBounds;
        };
        Obstacle.prototype.checkDestruction = function () {
            if (this.x < 10 && this.boolEstActif == true) {
                this.boolEstActif = false;
                this.refJeu.arreterObstacle(this);
            }
        };
        Obstacle.prototype.detecterCollision = function () {
            //Demande au protagoniste de vérifier si il y a une collision
            var facteurDeRedimensionnement = 1.2 * (this.y / 400);
            var distance = facteurDeRedimensionnement * -15;
            if (this.y - this.refProtagoniste.retournerY() > distance) {
                this.refProtagoniste.enCollisionGrossiere(this);
            }
        };
        Obstacle.prototype.desactiver = function () {
            this.removeEventListener('tick', this.detecterCollision_lier);
            this.detecterCollision_lier = null;
        };
        Obstacle.prototype.arreterObstacle = function () {
            this.arreterObjMobileAuto();
        };
        return Obstacle;
    }(ObjMobileAuto_1.ObjMobileAuto));
    exports.Obstacle = Obstacle;
});
//# sourceMappingURL=Obstacle.js.map