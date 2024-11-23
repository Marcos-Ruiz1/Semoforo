import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Semaforo } from './Entidades/Semaforo';
import {EmitirEstadoService} from './modules/estado/emitir-estado/emitir-estado.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Controller()
export class AppController {

  constructor(private readonly emitirEstadoService: EmitirEstadoService) {}

  @MessagePattern(process.env.ID_SEMAFORO)
  consumirEvento(@Payload() data: Semaforo) {

      console.log('Evento recibido:', data);
      Semaforo.getInstance().setId(data.getId());
      Semaforo.getInstance().setPosicionx(data.getPosicionx());
      Semaforo.getInstance().setPosicionx(data.getPosiciony());
      Semaforo.getInstance().setEstado(data.getEstado());
      this.emitirEstadoService.enviarEstado(data); 
      return { message: 'Evento procesado con éxito', data };

  }
}
