const {EventEmitter} = require('events');

const myEmitter = new EventEmitter();

// listener
myEmitter.on('greeting', () => {
    console.log('Hello world');
});

// emitter
myEmitter.emit('greeting');