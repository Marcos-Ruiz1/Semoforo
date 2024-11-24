import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Semaforo } from './Entidades/Semaforo';

require('dotenv').config();

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'semaforos.estado_queue',
      queueOptions: {
        durable: true
      },
    },
  });


  app.startAllMicroservices()

   // App escuchando...
  app.init();
  console.log('escuchando eventos...');
  console.log(process.env.ID_SEMAFORO);
}
bootstrap();