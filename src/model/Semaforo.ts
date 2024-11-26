import { ESTADOS_SEMAFORO } from "./ESTADOS_SEMAFORO";

export class Semaforo{

    public id : string;
    public posicionx: number;
    public posiciony: number;
    public estado : ESTADOS_SEMAFORO;
    private static  semaforoInstance: Semaforo;

    private constructor (){
        
    }

    public static getInstance(): Semaforo{
        if(Semaforo.semaforoInstance == undefined){
            Semaforo.semaforoInstance = new Semaforo();
        }
        return Semaforo.semaforoInstance;
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