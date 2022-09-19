/**
 * types
 * 
 * readable stream
 * wirteable stream
 * duplex
 */

const {createReadStream, createWriteStream} = require('fs');

const readStream = createReadStream('./text.txt');

const writeStream = createWriteStream('./text2.txt');

readStream.pipe(writeStream);