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
        this.rabbitClient.emit(process.env.ID_SEMAFORO, Semaforo.getInstance());
    }
    

    enviarEstado(data: Semaforo): string {
    
        this.rabbitClient.emit(data.getId(), data);
        return 'Evento enviado';
    }
        
}