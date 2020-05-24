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
    var Interface = /** @class */ (function (_super) {
        __extends(Interface, _super);
        function Interface(refStage, refJeu, nomInterface, posX, posY) {
            var _this = _super.call(this, refStage, posX, posY) || this;
            _this.refJeu = null;
            _this.refJeu = refJeu;
            _this.selectInterface(nomInterface);
            _this.ajouterLesEcouteurs();
            return _this;
        }
        Interface.prototype.dessiner = function () {
            window.lib.clipInterface.call(this);
            this.frameBounds = window.lib.clipInterface.prototype.frameBounds;
        };
        Interface.prototype.selectInterface = function (nomInterface) {
            this.gotoAndStop(nomInterface);
        };
        Interface.prototype.ajouterLesEcouteurs = function () {
            this['btControles_mc'].addEventListener('click', this.allerControles.bind(this));
            this['btDebut_mc'].addEventListener('click', this.commencerNiveauUn.bind(this));
            this['btRetour_mc'].addEventListener('click', this.allerAcceuil.bind(this));
            this['btRecommencerVictoire_mc'].addEventListener('click', this.commencerNiveauUn.bind(this));
            this['btRecommencerMort_mc'].addEventListener('click', this.commencerNiveauUn.bind(this));
            this['btPret_mc'].addEventListener('click', this.commencerNiveauDeux.bind(this));
            console.log(this['btPret_mc']);
        };
        Interface.prototype.allerAcceuil = function () {
            this.refJeu.jouerSonInterface();
            this.selectInterface('acceuil');
        };
        Interface.prototype.allerControles = function () {
            this.refJeu.jouerSonInterface();
            this.selectInterface('controles');
        };
        Interface.prototype.commencerNiveauUn = function () {
            this.faireCommencerJeu('1F');
        };
        Interface.prototype.commencerNiveauDeux = function () {
            this.faireCommencerJeu('2F');
        };
        Interface.prototype.faireCommencerJeu = function (niveau) {
            this.refJeu.jouerSonInterface();
            this.refJeu.commencerJeu(niveau);
            this.refStage.removeChild(this);
        };
        Interface.prototype.arreterInterface = function () {
            this['btControles'].removeEventListener('click', this.selectInterface('controles'));
            this['btDebut'].removeEventListener('click', this.faireCommencerJeu('1'));
            this['btRetour'].removeEventListener('click', this.selectInterface('acceuil'));
            this['btRecommencer'].removeEventListener('click', this.faireCommencerJeu('1'));
            this['btPret'].removeEventListener('click', this.faireCommencerJeu('2'));
            this.arreterObjVisible();
        };
        return Interface;
    }(ObjVisible_1.ObjVisible));
    exports.Interface = Interface;
});
//# sourceMappingURL=Interface.js.map