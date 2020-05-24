import {ObjVisible} from "./ObjVisible";
import {Jeu} from "./Jeu";

export class AfficheurScore extends ObjVisible {
    private refJeu: Jeu = null;
    private niveau: string = null;
    private score:number = null;
    private total:number = null;

    public constructor(refStage:createjs.Stage, refJeu: Jeu, niveau:string, posX:number, posY:number)
    {
        super(refStage, posX, posY);
        this.refJeu = refJeu;
        this.score = 0;
        this.niveau = niveau;

        if(this.niveau == '1F') {
            this.total = 20;
        }
        else {
            this.total = 35;
        }

        this['total_txt'].text = '/ '+this.total.toString();
    }


    protected dessiner():void {
        window.lib.clipAfficheurScore.call(this);
        this.frameBounds = window.lib.clipAfficheurScore.prototype.frameBounds;
    }

    public incrementer():void {
        this.score++;

        this['score_txt'].text = this.score.toString();

        console.log('score ='+this.score);
        console.log('total ='+this.total);

        if(this.score == this.total) {
            this.refJeu.faireGagner();
        }
    }

    public arreterAfficheurScore():void {
        this.arreterObjVisible();
    }
}

