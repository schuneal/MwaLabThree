function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            setInterval(function(){
                listener();
            }, 1000)
           
        })
    }
}

module.exports = Emitter;