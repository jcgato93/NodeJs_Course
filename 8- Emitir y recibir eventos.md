# Emitir y recibir eventos

Gran parte de la API central de Node.js se basa en una arquitectura asincrónica idiomática basada en eventos, en la que ciertos tipos de objetos (llamados “emisores”) emiten eventos con nombre que hacen que se llame a los objetos de función (“listeners”).

Ejemplo:

```javascript
// Requiere el modulo de events
const EventEmitter = require('events');

// Crear clase que extienda del modulo 'events'
class MyEmitter extends EventEmitter {}

// Crear instancia con las propriedades de events
const myEmitter = new MyEmitter();

// Especifivar en que situacion emitira el evento y el callback
// es decir que estara a la escucha del un evento llamado 'event'
myEmitter.on('event', () => {
  console.log('an event occurred!');
});

// Emitir el evento especifico
myEmitter.emit('event');
```