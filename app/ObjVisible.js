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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ObjVisible = /** @class */ (function (_super) {
        __extends(ObjVisible, _super);
        function ObjVisible(refStage, posX, posY) {
            var _this = _super.call(this) || this;
            _this.monClip = null;
            _this.refStage = null;
            _this.dessiner();
            _this.gotoAndStop(0);
            _this.refStage = refStage;
            _this.refStage.addChild(_this);
            _this.x = posX;
            _this.y = posY;
            return _this;
        }
        ObjVisible.prototype.arreterObjVisible = function () {
            this.refStage.removeChild(this);
        };
        return ObjVisible;
    }(createjs.MovieClip));
    exports.ObjVisible = ObjVisible;
});
//# sourceMappingURL=ObjVisible.js.map