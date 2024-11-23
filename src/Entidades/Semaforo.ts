import { ESTADOS_SEMAFORO } from "./ESTADOS_SEMAFORO";

export class Semaforo{

    private id : string;
    private posicionx: number;
    private posiciony: number;
    private estado : ESTADOS_SEMAFORO;
    private static  semaforoInstance: Semaforo;

    private constructor (){
        
    }

    public static getInstance(): Semaforo{
        if(this.semaforoInstance == null){
            this.semaforoInstance = new Semaforo();
        }
        return this.semaforoInstance;
    }
    
    getId(): string{
        return this.id;
    }
    getPosicionx(): number{
        return this.posicionx;
    }
    getPosiciony(): number{
        return this.posiciony;
    }
    getEstado(): ESTADOS_SEMAFORO{
        return this.estado;
    }

    setId(id: string){
        this.id = id;
    }
    setPosicionx(posicionx: number){
        this.posicionx = posicionx;
    }
    setPosiciony(posiciony: number){
        this.posiciony = posiciony;
    }
    setEstado(estado: ESTADOS_SEMAFORO){
        this.estado = estado;
    }

    

}