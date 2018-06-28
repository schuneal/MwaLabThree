const Emitter = require('./ViolinEvent');
const emtr = new Emitter();

emtr.on('note', function(){
    console.log("Violin is playing Music");
});

// setInterval(function(){
    emtr.emit('note');
// }, 1000)