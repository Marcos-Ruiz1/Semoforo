import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { Semaforo } from './../../../Entidades/Semaforo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EmitirEstadoService } from './../emitir-estado/emitir-estado.service';

@Controller()
export class ConsumirEstadoController {

  constructor(private readonly emitirEstadoService: EmitirEstadoService) {}

  @EventPattern("actualizarholaquetal")
  consumirEvento(@Payload() data: any) {

      console.log("si entro a recibir la información");
      console.log("dataaa", data)
      Semaforo.getInstance().setId(data.id);
      Semaforo.getInstance().setPosicionx(Number(data.posicionx));
      Semaforo.getInstance().setPosiciony(Number(data.posiciony));
      Semaforo.getInstance().setEstado(data.estado);
      console.log('Evento recibido:', data);
      console.log("recibio el objeto desde el emisor de prueba:");
      console.log("instancia asingleton:", Semaforo.getInstance());
      
      return { message: 'Evento procesado con éxito', data };
  }
}
