const fs = require('fs');
const server1 = require('http').createServer();
const image = "./season.jpg";

server1.on("request", (req, res) => {

    //Asynchronous way
    // fs.readFile(image, (err,data)=>{
    //     if (err) throw err;
    //     res.end(data);
    //     });

    //Synchronous way
    //  let img=fs.readFileSync(image);
    //  res.end(img);

    //Using Stream
    let value = fs.createReadStream(image);
    value.pipe(res);

});

server1.listen(8080, () => console.log('Listening on port 8080'));