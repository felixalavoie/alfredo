import {ObjVisible} from "./ObjVisible";

export class DecorFixe extends ObjVisible {

    public constructor(refStage:createjs.Stage, niveau:string, posX:number, posY:number)
    {
        super(refStage, posX, posY);
        this.gotoAndStop(niveau);
    }

    protected dessiner():void {
        window.lib.clipDecorFixe.call(this);
        this.frameBounds = window.lib.clipDecorFixe.prototype.frameBounds;
    }

    public  arreterDecorFixe():void {
        this.arreterObjVisible();
    }
}

