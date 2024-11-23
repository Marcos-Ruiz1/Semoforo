import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import {EmitirEstado} from './modules/estado/emitir-estado/emitir-estado.module'
@Module({
  imports: [ConfigModule.forRoot({

    isGlobal: true
    
  }),
    EmitirEstado
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
