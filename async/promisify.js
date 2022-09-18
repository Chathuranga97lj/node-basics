const {readFile} = require('fs'); // file system module
const {promisify} = require('util');

// using old way
// readFile('./callback.js', 'utf8', (err, data) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });


// do same using promise
const read = promisify(readFile);

read('./callback.js', 'utf-8')
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));