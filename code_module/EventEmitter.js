const {EventEmitter} = require('events');

const myEmitter = new EventEmitter();

// listener - firest execute this
myEmitter.on('greeting', (name) => {
    console.log(`Hello ${name} !`);
});

// secondly execute this
myEmitter.on('greeting', () => {
    console.log("Hello again !");
})


// emitter
myEmitter.emit('greeting', 'Chathuranga');