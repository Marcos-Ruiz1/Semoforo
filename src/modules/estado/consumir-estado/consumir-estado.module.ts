import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConsumirEstadoController } from './consumir-estado.controller';
import { EmitirEstado } from './../emitir-estado/emitir-estado.module';
import {EmitirEstadoService} from './../emitir-estado/emitir-estado.service';
@Module({
    imports: [EmitirEstado],
    controllers: [ ConsumirEstadoController],
    providers: [],
  })
  export class ConsumirEstado {}
