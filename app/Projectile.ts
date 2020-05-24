import {ObjMobileAuto} from "app/ObjMobileAuto";
import {Protagoniste} from "app/Protagoniste";
import {Jeu} from "app/Jeu";
import {Antagoniste} from "./Antagoniste";

export class Projectile extends ObjMobileAuto {

    public constructor(refStage:createjs.Stage, refJeu:Jeu, refProtagoniste:Protagoniste, arrAntagonistes: Array<Antagoniste>, posX:number, posY:number)
    {
        super(refStage, refJeu, refProtagoniste, posX, posY);
        this.vitesse = 20;
        this.sense = 1;
        this.boolEstActif = true;
    }

    protected dessiner():void {
        window.lib.clipProjectile.call(this);
        this.frameBounds = window.lib.clipProjectile.prototype.frameBounds;
    }

    protected checkDestruction():void {
        if(this.x > 825 && this.boolEstActif == true){
            this.refJeu.arreterProjectile(this);
            this.boolEstActif = false;
        }
    }

    protected detecterCollision():void {
        //Demande au protagoniste de vérifier si il y a une collision
        this.refJeu.enCollisionGrossiere(this);
    }

    public toucher():void {
    //    jouer son
        setTimeout(this.arreterProjectile.bind(this), 10);
    }

    public arreterProjectile():void {
        this.arreterObjMobileAuto();
    }
}