
export abstract class ObjVisible extends createjs.MovieClip {
    protected monClip:createjs.MovieClip = null;
    protected refStage:createjs.Stage = null;

    public constructor(refStage:createjs.Stage, posX:number, posY:number)
    {
        super();
        this.dessiner();
        this.gotoAndStop(0);
        this.refStage = refStage;
        this.refStage.addChild(this);
        this.x = posX;
        this.y = posY;
    }

    protected abstract dessiner():void;
    
    public arreterObjVisible():void {
        this.refStage.removeChild(this);
    }
}

