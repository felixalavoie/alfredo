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
    var DecorMobile = /** @class */ (function (_super) {
        __extends(DecorMobile, _super);
        function DecorMobile(refStage, niveau, posX, posY) {
            var _this = _super.call(this, refStage, posX, posY) || this;
            _this.faireDefiler_lier = null;
            _this.gotoAndStop(niveau);
            _this.vitesse = 3;
            _this.faireDefiler_lier = _this.faireDefiler.bind(_this);
            _this.addEventListener('tick', _this.faireDefiler_lier);
            return _this;
        }
        DecorMobile.prototype.dessiner = function () {
            window.lib.clipDecorMobile.call(this);
            this.frameBounds = window.lib.clipDecorMobile.prototype.frameBounds;
        };
        DecorMobile.prototype.faireDefiler = function () {
            this.x = this.x - this.vitesse;
            if (this.x < -1200) {
                this.x = 1200;
            }
        };
        DecorMobile.prototype.arreterDecorMobile = function () {
            this.faireDefiler_lier = null;
            this.arreterObjVisible();
        };
        return DecorMobile;
    }(ObjVisible_1.ObjVisible));
    exports.DecorMobile = DecorMobile;
});
//# sourceMappingURL=DecorMobile.js.map