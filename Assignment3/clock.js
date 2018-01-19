const EventEmitter= require('events');
class Clock extends EventEmitter{
   constructor()
   {
       super();
       this.tickFunc();
   }
   tickFunc()
   {
       const scope=this;
       setInterval(function()
    {
        scope.emit('tick');
    },1000);
   }
}
module.exports = Clock;