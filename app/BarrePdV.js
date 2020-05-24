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
define(["require", "exports", "./ObjVisible"], function (require, exports, ObjVisible_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BarrePdV = /** @class */ (function (_super) {
        __extends(BarrePdV, _super);
        function BarrePdV(refStage, posX, posY) {
            return _super.call(this, refStage, posX, posY) || this;
        }
        BarrePdV.prototype.dessiner = function () {
            window.lib.clipBarrePdV.call(this);
            this.frameBounds = window.lib.clipBarrePdV.prototype.frameBounds;
        };
        BarrePdV.prototype.majBarre = function (label) {
            console.log('majBarre label =' + label);
            var etiquette = 'pdv_' + label;
            this.gotoAndStop(etiquette);
        };
        BarrePdV.prototype.resetBarre = function () {
            console.log('resetBarre()');
            this.gotoAndStop('pdv_10');
        };
        BarrePdV.prototype.arreterBarrePdV = function () {
            this.arreterObjVisible();
        };
        return BarrePdV;
    }(ObjVisible_1.ObjVisible));
    exports.BarrePdV = BarrePdV;
});
//# sourceMappingURL=BarrePdV.js.map