'use strict';
var EventEmitter = require('events')
class Violin extends EventEmitter{
    constructor(){
        super();
    }
    func(){
        setInterval(()=>this.emit("note"),1000);
    }
}
var violin = new Violin();
violin.on("note",function(){
    console.log("Violin is playing music!!!")
});
violin.func();