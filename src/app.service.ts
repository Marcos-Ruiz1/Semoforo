import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  
    onModuleInit() {
      console.log('Instrucción creada solamente al inicio de la aplicación');
    }
  
}
