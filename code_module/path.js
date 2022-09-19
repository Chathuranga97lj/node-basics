const path = require('path');
// const mode = require('./module/mode');

// console.log(__dirname);
// console.log(__filename);

// console.log(process.cwd());

const base = path.basename(__filename);
console.log(base);

const ext = path.extname(__filename); // extention
console.log(ext);

const parse = path.parse(__filename);
console.log(parse);