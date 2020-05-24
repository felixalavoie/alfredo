import {ObjVisible} from "./ObjVisible";
import {Jeu} from "./Jeu";

export class Interface extends ObjVisible {
    private refJeu:Jeu = null;

    public constructor(refStage:createjs.Stage, refJeu:Jeu, nomInterface:string, posX:number, posY:number)
    {
        super(refStage, posX, posY);
        this.refJeu = refJeu;
        this.selectInterface(nomInterface);
        this.ajouterLesEcouteurs();
    }

    protected dessiner():void {
        window.lib.clipInterface.call(this);
        this.frameBounds = window.lib.clipInterface.prototype.frameBounds;
    }

    public selectInterface(nomInterface:string) {
        this.gotoAndStop(nomInterface);
    }

    private ajouterLesEcouteurs() {
        this['btControles_mc'].addEventListener('click', this.allerControles.bind(this));
        this['btDebut_mc'].addEventListener('click', this.commencerNiveauUn.bind(this));
        this['btRetour_mc'].addEventListener('click', this.allerAcceuil.bind(this));
        this['btRecommencerVictoire_mc'].addEventListener('click', this.commencerNiveauUn.bind(this));
        this['btRecommencerMort_mc'].addEventListener('click', this.commencerNiveauUn.bind(this));
        this['btPret_mc'].addEventListener('click', this.commencerNiveauDeux.bind(this));
        console.log(this['btPret_mc']);
    }

    private allerAcceuil():void {
        this.refJeu.jouerSonInterface();
        this.selectInterface('acceuil')
    }

    private allerControles():void {
        this.refJeu.jouerSonInterface();
        this.selectInterface('controles')
    }

    private commencerNiveauUn():void {
        this.faireCommencerJeu('1F');
    }

    private commencerNiveauDeux():void {
        this.faireCommencerJeu('2F');
    }

    private faireCommencerJeu(niveau:string):void {
        this.refJeu.jouerSonInterface();
        this.refJeu.commencerJeu(niveau);
        this.refStage.removeChild(this);
    }

    public arreterInterface() {
        this['btControles'].removeEventListener('click', this.selectInterface('controles'));
        this['btDebut'].removeEventListener('click', this.faireCommencerJeu('1'));
        this['btRetour'].removeEventListener('click', this.selectInterface('acceuil'));
        this['btRecommencer'].removeEventListener('click', this.faireCommencerJeu('1'));
        this['btPret'].removeEventListener('click', this.faireCommencerJeu('2'));
        this.arreterObjVisible();
    }
}

