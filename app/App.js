define(["require", "exports", "./Jeu"], function (require, exports, Jeu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = /** @class */ (function () {
        function App() {
            this.stage = null;
            this.exportRoot = null;
            this.jeu = null;
            window.init(this);
        }
        App.prototype.initialiser = function (refStage, refExportRoot) {
            // Initialisation des attributs relatifs à l'animation ------------------------------------------------------------------
            this.stage = refStage; // Récupérer la références de la scène nouvellement créée
            console.log(refStage);
            this.stage.enableMouseOver(24); // Activer les mouseover 24 fois par seconde sur la scène
            // ----------------------------------------------------------------------------------------------------------------------
            this.jeu = new Jeu_1.Jeu(this.stage);
        };
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=App.js.map