const fs= require('fs');
const zlib=require('zlib');

function zip()
{
    var gzip= zlib.createGzip();

    var readable = fs.createReadStream('./fall_Color.jpg');
    var compressed= fs.createWriteStream('./fall_Color.jpg.gz');
    readable.pipe(gzip).pipe(compressed);
}
 zip();


 function unzip()
 {
     var gzip=zlib.createGunzip();
     var readable=fs.createReadStream('./fall_Color.jpg.gz');
     var output=fs.createWriteStream('./fall_Color.jpg');
     readable.pipe(gzip).pipe(output);
 }
 unzip();