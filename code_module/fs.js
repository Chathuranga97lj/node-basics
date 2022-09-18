const {opendir, stat} = require('fs');
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

getStat('./EventEmitter.js')
    .then((stat) => {
        console.log(stat);
    })
    .catch(err => console.log(err));