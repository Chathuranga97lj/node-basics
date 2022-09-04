const {pbkdf2} = require('crypto');
const {createServer} = require('http');

const start = Date.now();

const Hash = () => {
    pbkdf2('myPass', 'verySecretString', 10000, 1000, 'sha256', () => {
        console.log('Hash: ', Date.now()-start);
    });
}

const lis = () => {
    createServer().listen(3000, () => {
        console.log('Listening: ', Date.now() - start);
    });
}

Hash()
Hash()
Hash()
Hash()
Hash()

lis()

//console.log('Hello: ', Date.now() - start);