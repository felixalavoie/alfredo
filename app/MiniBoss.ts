
import {ObjMobileAuto} from "app/ObjMobileAuto";
import {Protagoniste} from "app/Protagoniste";
import {Jeu} from "app/Jeu";
import {Antagoniste} from "./Antagoniste";

export class MiniBoss extends Antagoniste {

    public constructor(refStage:createjs.Stage, refJeu:Jeu, refProtagoniste:Protagoniste, posX:number, posY:number)
    {
        super(refStage, refJeu, refProtagoniste, posX, posY);
        this.vitesse = 20;
        this.sense = -1;
    }

    protected dessiner():void {
        window.lib.clipBoss.call(this);
        this.frameBounds = window.lib.clipBoss.prototype.frameBounds;
    }

    public arreterAntagoniste():void {
        this.desactiver();
        setTimeout(this.arreterObjMobileAuto.bind(this), 500);
    }
}