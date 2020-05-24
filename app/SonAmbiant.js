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
define(["require", "exports", "./Sons"], function (require, exports, Sons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SonAmbiant = /** @class */ (function (_super) {
        __extends(SonAmbiant, _super);
        function SonAmbiant(strUrlson, arrExtAlt, idSon, maxNumber, loops) {
            var _this = _super.call(this, strUrlson, arrExtAlt, idSon, maxNumber, loops) || this;
            console.log("musique ambiante");
            return _this;
        }
        SonAmbiant.prototype.demarrerSon = function () {
            //Si une trame ne joue pas
            if (this._instanceSon == null) {
                _super.prototype.demarrerSon.call(this);
            }
        };
        SonAmbiant.prototype.arreterSon = function () {
            if (this._instanceSon != null) {
                _super.prototype.arreterSon.call(this);
            }
        };
        return SonAmbiant;
    }(Sons_1.Sons));
    exports.SonAmbiant = SonAmbiant;
});
//# sourceMappingURL=SonAmbiant.js.map