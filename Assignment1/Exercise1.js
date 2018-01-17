function Musician(name)
{
    this.name=name;
}

var violinist=new Musician("Ram");
var pianist=new Musician("Hari");

Musician.prototype.play=function(piece)
{
    return `${this.name} is now playing ${piece}`;
}

console.log(violinist.play("violin"));
console.log(pianist.play("piano"));