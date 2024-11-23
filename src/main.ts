import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://casarosita.sytes.net:5672'],
      queue: 'semaforos',
      queueOptions: {
        durable: true
      },
    },
  });

   // App escuchando...
   app.listen();
   console.log('escuchando eventos...');
  console.log(process.env.ID_SEMAFORO);
}
bootstrap();