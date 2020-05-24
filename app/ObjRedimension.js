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
define(["require", "exports", "app/ObjVisible"], function (require, exports, ObjVisible_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ObjRedimension = /** @class */ (function (_super) {
        __extends(ObjRedimension, _super);
        function ObjRedimension(refStage, posX, posY) {
            var _this = _super.call(this, refStage, posX, posY) || this;
            _this.redimensionMax = null;
            _this.redimensionMax = 1.2;
            _this.redimensionner();
            return _this;
        }
        ObjRedimension.prototype.redimensionner = function () {
            var facteurDeRedimensionnement = this.redimensionMax * (this.y / 400);
            this.scaleX = facteurDeRedimensionnement;
            this.scaleY = facteurDeRedimensionnement;
        };
        ObjRedimension.prototype.arreterObjRedimension = function () {
            this.arreterObjVisible();
        };
        return ObjRedimension;
    }(ObjVisible_1.ObjVisible));
    exports.ObjRedimension = ObjRedimension;
});
//# sourceMappingURL=ObjRedimension.js.map