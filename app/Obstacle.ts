import {ObjMobileAuto} from "app/ObjMobileAuto";
import {Protagoniste} from "app/Protagoniste";
import {Jeu} from "app/Jeu";

export class Obstacle extends ObjMobileAuto {

    public constructor(refStage:createjs.Stage, refJeu:Jeu, refProtagoniste:Protagoniste, posX:number, posY:number)
    {
        super(refStage, refJeu, refProtagoniste, posX, posY);
        this.vitesse = 4;
        this.sense = -1;
        this.boolEstActif = true;
        this.refStage.setChildIndex( this, 2);
    }

    protected dessiner():void {
        window.lib.clipObstacle.call(this);
        this.frameBounds = window.lib.clipObstacle.prototype.frameBounds;
    }

    protected checkDestruction():void {
        if(this.x < 10 && this.boolEstActif == true){
            this.boolEstActif = false;
            this.refJeu.arreterObstacle(this);
        }
    }

    protected detecterCollision():void {
        //Demande au protagoniste de vérifier si il y a une collision
        let facteurDeRedimensionnement:number = 1.2 * (this.y/400);
        let distance = facteurDeRedimensionnement*-15;

        if(this.y - this.refProtagoniste.retournerY() > distance) {
            this.refProtagoniste.enCollisionGrossiere(this);
        }
    }

    public desactiver():void {
        this.removeEventListener('tick', this.detecterCollision_lier);
        this.detecterCollision_lier = null;
    }

    public arreterObstacle():void {
        this.arreterObjMobileAuto();
    }
}