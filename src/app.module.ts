import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import {EmitirEstado} from './modules/estado/emitir-estado/emitir-estado.module'
import {ConsumirEstado} from './modules/estado/consumir-estado/consumir-estado.module';

@Module({
  imports: [
    
    EmitirEstado,
    ConsumirEstado
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
