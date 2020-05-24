import {ObjVisible} from "./ObjVisible";

export class DecorMobile extends ObjVisible {
    private faireDefiler_lier: any = null;

    public constructor(refStage:createjs.Stage, niveau:string, posX:number, posY:number)
    {
        super(refStage, posX, posY);
        this.gotoAndStop(niveau);
        this.vitesse = 3;

        this.faireDefiler_lier = this.faireDefiler.bind(this);
        this.addEventListener('tick', this.faireDefiler_lier);
    }

    protected dessiner():void {
        window.lib.clipDecorMobile.call(this);
        this.frameBounds = window.lib.clipDecorMobile.prototype.frameBounds;
    }

    private faireDefiler():void {
        this.x = this.x - this.vitesse;
        if(this.x < -1200) {
            this.x = 1200;
        }
    }

    public arreterDecorMobile():void {
        this.faireDefiler_lier = null;
        this.arreterObjVisible();
    }
}

