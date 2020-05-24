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
    var AfficheurScore = /** @class */ (function (_super) {
        __extends(AfficheurScore, _super);
        function AfficheurScore(refStage, refJeu, niveau, posX, posY) {
            var _this = _super.call(this, refStage, posX, posY) || this;
            _this.refJeu = null;
            _this.niveau = null;
            _this.score = null;
            _this.total = null;
            _this.refJeu = refJeu;
            _this.score = 0;
            _this.niveau = niveau;
            if (_this.niveau == '1F') {
                _this.total = 20;
            }
            else {
                _this.total = 35;
            }
            _this['total_txt'].text = '/ ' + _this.total.toString();
            return _this;
        }
        AfficheurScore.prototype.dessiner = function () {
            window.lib.clipAfficheurScore.call(this);
            this.frameBounds = window.lib.clipAfficheurScore.prototype.frameBounds;
        };
        AfficheurScore.prototype.incrementer = function () {
            this.score++;
            this['score_txt'].text = this.score.toString();
            console.log('score =' + this.score);
            console.log('total =' + this.total);
            if (this.score == this.total) {
                this.refJeu.faireGagner();
            }
        };
        AfficheurScore.prototype.arreterAfficheurScore = function () {
            this.arreterObjVisible();
        };
        return AfficheurScore;
    }(ObjVisible_1.ObjVisible));
    exports.AfficheurScore = AfficheurScore;
});
//# sourceMappingURL=AfficheurScore.js.map