const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Register an event listener for the 'greet' event
myEmitter.on('greet', (name) => {//event listener function
    console.log(`Hello, ${name}!`);
});
myEmitter.on('exit', () => {
    console.log("application closed");
});
myEmitter.emit('greet', 'Alice'); // Emit the 'greet' event triggering the event listener
myEmitter.emit('exit');