const {opendir} = require('fs');
const {promisify} = require('util');

const oDir = promisify(opendir);

oDir('./')
    .then(async (dir) => {
        for await(let dirent of dir) {
            console.log(dirent.name);
        };
    })
    .catch()