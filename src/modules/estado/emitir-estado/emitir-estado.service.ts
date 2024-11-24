import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import  {ClientProxy} from '@nestjs/microservices';
import { ESTADOS_SEMAFORO } from 'src/Entidades/ESTADOS_SEMAFORO';
import { Semaforo } from 'src/Entidades/Semaforo';

@Injectable()
export class EmitirEstadoService implements OnModuleInit{

    constructor(
        @Inject('semaforos-token') private readonly rabbitClient: ClientProxy,
    ) {}
    
    onModuleInit() {
        
        Semaforo.getInstance().setId(process.env.ID_SEMAFORO);
        Semaforo.getInstance().setPosicionx(Number(process.env.POSICIONX));
        Semaforo.getInstance().setPosiciony(Number(process.env.POSICIONY));
        Semaforo.getInstance().setEstado(ESTADOS_SEMAFORO[process.env.ESTADO]);
        console.log(Semaforo.getInstance());
        this.rabbitClient.emit("semaforo.crear", Semaforo.getInstance());
    }
    

    enviarEstado(): string {
        console.log("si entra al servicio de emitir");
        this.rabbitClient.emit('semaforo.actualizar', Semaforo.getInstance());
        return 'Estado enviado';
    }
        
}