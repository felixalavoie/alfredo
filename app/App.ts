import {Jeu} from "./Jeu";

export class App {
    private stage:createjs.Stage = null;
    private exportRoot: any = null;
    private jeu: Jeu = null;

    public constructor()
    {
        window.init(this);
    }

    public initialiser(refStage, refExportRoot):void {
        // Initialisation des attributs relatifs à l'animation ------------------------------------------------------------------
        this.stage = refStage; 					// Récupérer la références de la scène nouvellement créée
        console.log(refStage);
        this.stage.enableMouseOver(24); 	// Activer les mouseover 24 fois par seconde sur la scène
        // ----------------------------------------------------------------------------------------------------------------------
        this.jeu = new Jeu(this.stage);
    }
}




