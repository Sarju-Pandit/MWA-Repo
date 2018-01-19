const Clock = require('./clock');
const obj=new Clock();
obj.on('tick',()=>
{
    console.log('woohoo');
});