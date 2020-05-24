import {ObjVisible} from "app/ObjVisible";
import {Protagoniste} from "app/Protagoniste";
import {Jeu} from "app/Jeu";
import {ObjRedimension} from "./ObjRedimension";

export abstract class ObjMobileAuto extends ObjRedimension {
    protected vitesse:number = null;
    protected sense:number = null;
    private bouger_lier: any = null;
    protected detecterCollision_lier: any = null;

    protected refJeu: any = null;
    protected refProtagoniste: Protagoniste = null;
    protected boolEstActif: boolean = null;

    public constructor(refStage:createjs.Stage, refJeu:Jeu, refProtagoniste:Protagoniste, posX:number, posY:number)
    {
        super(refStage, posX, posY);
        this.refJeu = refJeu;
        this.refProtagoniste = refProtagoniste;
        this.boolEstActif = true;

        this.bouger_lier = this.bouger.bind(this);
        this.detecterCollision_lier = this.detecterCollision.bind(this);
        this.addEventListener('tick', this.bouger_lier);
        this.addEventListener('tick', this.detecterCollision_lier);
    }

    protected abstract checkDestruction():void;

    protected abstract detecterCollision():void;

    protected bouger() {
        this.x = this.x + (this.vitesse*this.sense);
        this.checkDestruction();
    }

    public arreterObjMobileAuto():void {
        this.removeEventListener('tick', this.bouger_lier);
        this.removeEventListener('tick', this.detecterCollision_lier);
        this.bouger_lier = null;
        this.detecterCollision_lier = null;
        this.arreterObjVisible();
    }
}