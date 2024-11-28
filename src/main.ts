//import amqp, { Channel, Connection } from 'amqplib/callback_api';
import { Semaforo } from './model/Semaforo';
import { emitirEstado } from './services/semaforoservice'
import { consumirEstado } from './services/semaforoservice';
const fs = require('fs');
const amqp = require('amqplib/callback_api');


let isFirstTime: boolean = true;

const conf = {
    cert: fs.readFileSync('./llaves/client_natsu_certificate.pem'),
    key: fs.readFileSync('./llaves/client_natsu_key.pem'),
    passphrase: 'hola123',
    ca: [fs.readFileSync('./llaves/ca_certificate.pem')]
}

amqp.connect('amqps://localhost', conf, function (error0, connection) {

    if (error0) {
        throw error0;
    }


    //Consumir Mensajes
    connection.createChannel(function (error1, channel) {
        consumirEstado(error1, channel);
    });

    //Enviar mensajes
    connection.createChannel(function (error1, channel) {
        emitirEstado(error1, channel, isFirstTime);
    });

});

setInterval(() => {
    //para imprimir el etado del semaforo alvv!!!
    console.log('semaforo %s', JSON.stringify(Semaforo.getInstance()))

}, 5 * 1000);


