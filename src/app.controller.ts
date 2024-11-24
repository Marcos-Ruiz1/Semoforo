import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Semaforo } from './Entidades/Semaforo';
import {EmitirEstadoService} from './modules/estado/emitir-estado/emitir-estado.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Controller()
export class AppController {

}
