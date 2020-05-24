import {ObjVisible} from "./ObjVisible";

export class BarrePdV extends ObjVisible {

    public constructor(refStage:createjs.Stage, posX:number, posY:number)
    {
        super(refStage, posX, posY);
    }

    protected dessiner():void {
        window.lib.clipBarrePdV.call(this);
        this.frameBounds = window.lib.clipBarrePdV.prototype.frameBounds;
    }

    public majBarre(label:string):void {
        console.log('majBarre label ='+label);
        let etiquette:string = 'pdv_'+label;
        this.gotoAndStop(etiquette);
    }

    public resetBarre():void {
        console.log('resetBarre()');
        this.gotoAndStop('pdv_10');
    }

    public arreterBarrePdV():void {
        this.arreterObjVisible();
    }
}

