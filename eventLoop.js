const {pbkdf2} = require('crypto');

const start = Date.now();

const Hash = () => {
    pbkdf2('myPass', 'verySecretString', 10000, 1000, 'sha256', () => {
        console.log('Hash: ', Date.now()-start);
    });
}

Hash()
Hash()
Hash()
Hash()
Hash()

//console.log('Hello: ', Date.now() - start);