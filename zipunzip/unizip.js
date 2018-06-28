var fs = require('fs');
var zlib = require('zlib');

var readcompressed = fs.createReadStream('./earth.jpg.gz');
var decompressed = fs.createWriteStream('./meroearth.jpg');
readcompressed.pipe( zlib.createGunzip()).pipe(decompressed);