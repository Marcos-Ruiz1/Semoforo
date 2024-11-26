
import {Semaforo} from './../model/Semaforo';
import {ESTADOS_SEMAFORO} from './../model/ESTADOS_SEMAFORO';   



//Verifica que existe la cola, actualiza la información del semaforo y envía al mvts
export function emitirEstado(error, channel, isFirstTime) {
    
    let comandoaccionar: string;

    console.log("si entra a la función de actualizar en el callback");
    if (error) {
        throw error;
    }

    channel.assertQueue('semaforos.informacion', {
        durable: false,
        autoDelete: true,
    });

    if(isFirstTime){
        comandoaccionar = "crear";
        crearSemaforo();
    }else{
        comandoaccionar = "actualizar";
    }
    
    
    const data = {
        cmd: comandoaccionar,
        data: Semaforo.getInstance()
    };

    
    channel.sendToQueue('semaforos.informacion', Buffer.from(JSON.stringify(data)));
    console.log("mensaje enviado");


}

//Recibe la petición del cambio de estado del semaforo y lo actualiza 
export function consumirEstado(error, channel){
    
    channel.assertQueue(process.env.ID_SEMAFORO, {
        durable: false,
        autoDelete: true
    });
  
    
    channel.consume(process.env.ID_SEMAFORO, function(data) {
        actualizarSemaforo(data);
    }, {
        noAck: true
    });

}


export function crearSemaforo(){
    Semaforo.getInstance().setId(process.env.ID_SEMAFORO);
    Semaforo.getInstance().setEstado(ESTADOS_SEMAFORO[process.env.ESTADO]);
    Semaforo.getInstance().setPosicionx(Number(process.env.POSICIONX));
    Semaforo.getInstance().setPosiciony(Number(process.env.POSICIONY));
}

export function actualizarSemaforo(data) {
    const datastring = data.content.toString();
    const semaforo: Semaforo = JSON.parse(datastring);
    console.log("semaforo recibido: ", semaforo);
    Semaforo.getInstance().setEstado(semaforo.estado);
}

