import {ObjVisible} from "app/ObjVisible";

export abstract class ObjRedimension extends ObjVisible {
    private redimensionMax:number = null;

    public constructor(refStage:createjs.Stage, posX:number, posY:number)
    {
        super(refStage, posX, posY);
        this.redimensionMax = 1.2;
        this.redimensionner();
    }

    protected redimensionner():void{
        let facteurDeRedimensionnement = this.redimensionMax * (this.y/400);
        this.scaleX = facteurDeRedimensionnement;
        this.scaleY = facteurDeRedimensionnement;
    }

    public arreterObjRedimension():void {
        this.arreterObjVisible();
    }
}