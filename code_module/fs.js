const {opendir, stat, open, readFile, writeFile} = require('fs');
const {promisify} = require('util');

const oDir = promisify(opendir);
const getStat = promisify(stat);

// see what are the files in directory
// oDir('./')
//     .then(async (dir) => {
//         for await(let dirent of dir) {
//             console.log(dirent.name);
//         };
//     })
//     .catch()

// check files stat
// getStat('./EventEmitter.js')
//     .then((stat) => {
//         console.log(stat);
//     })
//     .catch(err => console.log(err));

