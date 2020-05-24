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
    var ObjMobileAuto = /** @class */ (function (_super) {
        __extends(ObjMobileAuto, _super);
        function ObjMobileAuto(refStage, refJeu, refProtagoniste, posX, posY) {
            var _this = _super.call(this, refStage, posX, posY) || this;
            _this.vitesse = null;
            _this.sense = null;
            _this.bouger_lier = null;
            _this.detecterCollision_lier = null;
            _this.refJeu = null;
            _this.refProtagoniste = null;
            _this.boolEstActif = null;
            _this.refJeu = refJeu;
            _this.refProtagoniste = refProtagoniste;
            _this.boolEstActif = true;
            _this.bouger_lier = _this.bouger.bind(_this);
            _this.detecterCollision_lier = _this.detecterCollision.bind(_this);
            _this.addEventListener('tick', _this.bouger_lier);
            _this.addEventListener('tick', _this.detecterCollision_lier);
            return _this;
        }
        ObjMobileAuto.prototype.bouger = function () {
            this.x = this.x + (this.vitesse * this.sense);
            this.checkDestruction();
        };
        ObjMobileAuto.prototype.arreterObjMobileAuto = function () {
            this.removeEventListener('tick', this.bouger_lier);
            this.removeEventListener('tick', this.detecterCollision_lier);
            this.bouger_lier = null;
            this.detecterCollision_lier = null;
            this.arreterObjVisible();
        };
        return ObjMobileAuto;
    }(ObjRedimension_1.ObjRedimension));
    exports.ObjMobileAuto = ObjMobileAuto;
});
//# sourceMappingURL=ObjMobileAuto.js.map