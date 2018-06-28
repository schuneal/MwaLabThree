var fs = require('fs');
var zlib = require('zlib');
var gzip = zlib.createGzip();

var readable = fs.createReadStream('./earth.jpg');
var compressed = fs.createWriteStream('./earth.jpg.gz');

readable.pipe(gzip).pipe(compressed);