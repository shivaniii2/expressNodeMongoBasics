const EventEmitter = require("events");
// Create a new instance of EventEmitter
const myEvent = new EventEmitter();
// Registering an event listener
myEvent.on("callMyName", (data) =>{
    console.log(data.message);
})

// Emitting the event

myEvent.emit('callMyName',{message :"shivani sharma"})