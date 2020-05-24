
import {ObjMobileAuto} from "app/ObjMobileAuto";
import {Protagoniste} from "app/Protagoniste";
import {Jeu} from "app/Jeu";

export class Antagoniste extends ObjMobileAuto {

    public constructor(refStage:createjs.Stage, refJeu:Jeu, refProtagoniste:Protagoniste, posX:number, posY:number)
    {
        super(refStage, refJeu, refProtagoniste, posX, posY);
        this.vitesse = 8;
        this.sense = -1;
        this.boolEstActif = true;
        this.refStage.setChildIndex(this, 10);
    }

    protected dessiner():void {
        window.lib.clipAntagoniste.call(this);
        this.frameBounds = window.lib.clipAntagoniste.prototype.frameBounds;
    }

    protected checkDestruction():void {
        if(this.x < 10 && this.boolEstActif == true){
            this.refJeu.arreterAntagoniste(this);
            this.boolEstActif = false;
        }
    }

    protected detecterCollision():void {
        //Demande au protagoniste de vérifier si il y a une collision
        let facteurDeRedimensionnement:number = 1.2 * (this.y/400);
        let distance = facteurDeRedimensionnement*-25;

        if(this.y - this.refProtagoniste.retournerY() > distance) {
            this.refProtagoniste.enCollisionGrossiere(this);
        }
    }

    public desactiver():void {
        this.removeEventListener('tick', this.detecterCollision_lier);
        this.detecterCollision_lier = null;
    }

    public mourrir():void {
        this.gotoAndStop('mort');
        this.refJeu.arreterAntagoniste(this);
    }

    public arreterAntagoniste():void {
        this.desactiver();
        setTimeout(this.arreterObjMobileAuto.bind(this), 700);
    }
}