import {Sons} from "./Sons";

export class SonAmbiant extends Sons{

    public constructor(strUrlson:string,arrExtAlt:Array<string>, idSon:string, maxNumber:number, loops:number){
        super(strUrlson,arrExtAlt,idSon, maxNumber, loops);
        console.log("musique ambiante");
    }

    public demarrerSon(){
        //Si une trame ne joue pas
        if(this._instanceSon==null){
            super.demarrerSon();
        }
    }

    public arreterSon(){
        if(this._instanceSon!=null){
            super.arreterSon();
        }
    }
}