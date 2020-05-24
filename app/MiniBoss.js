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
define(["require", "exports", "./Antagoniste"], function (require, exports, Antagoniste_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MiniBoss = /** @class */ (function (_super) {
        __extends(MiniBoss, _super);
        function MiniBoss(refStage, refJeu, refProtagoniste, posX, posY) {
            var _this = _super.call(this, refStage, refJeu, refProtagoniste, posX, posY) || this;
            _this.vitesse = 20;
            _this.sense = -1;
            return _this;
        }
        MiniBoss.prototype.dessiner = function () {
            window.lib.clipBoss.call(this);
            this.frameBounds = window.lib.clipBoss.prototype.frameBounds;
        };
        MiniBoss.prototype.arreterAntagoniste = function () {
            this.desactiver();
            setTimeout(this.arreterObjMobileAuto.bind(this), 500);
        };
        return MiniBoss;
    }(Antagoniste_1.Antagoniste));
    exports.MiniBoss = MiniBoss;
});
//# sourceMappingURL=MiniBoss.js.map