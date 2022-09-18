const {EventEmitter} = require('events');

const myEmitter = new EventEmitter();

// listener
myEmitter.on('greeting', (name) => {
    console.log(`Hello ${name} !`);
});

myEmitter.on('greeting', () => {
    console.log("Hello again !");
})


// emitter
myEmitter.emit('greeting', 'Chathuranga');