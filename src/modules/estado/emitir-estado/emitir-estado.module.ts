import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {EmitirEstadoService} from "./emitir-estado.service";

@Module({
    imports: [
        ClientsModule.register([
          {
            name: 'semaforos-token',
            transport: Transport.RMQ,
            options: {
              urls: ['amqp://localhost:5672'],
              queue: 'semaforos',
              queueOptions: {
                durable: true
              },
            },
          },
        ]),
      ],
    controllers: [],
    providers: [EmitirEstadoService],
    exports: [EmitirEstadoService, ClientsModule]
  })
  export class EmitirEstado {}
