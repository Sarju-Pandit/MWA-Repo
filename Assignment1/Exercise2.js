String.prototype.filterWords=function(words)
{
    var str=this;
    for(let i=0;i<words.length;i++)
    {
        str=str.replace(words[i],"***")
    }
    return str;
}

console.log("This house is nice!".filterWords(['house','nice']));