// create server
const http = require('http');

// for terminate server when some error occor
const dbConnection = true;

if(!dbConnection) {
    process.exit(1);
}

const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/':
            res.end(`
                <html>
                <head>
                    <title>First Node App</title>
                </head>
                <body>
                    <h1>Welcome to my node app</h1>
                </body>
                </html>
            `);
            break;

        case '/admin':
            res.end('Welcome to the admin page');
            break;
        
        case '/user':
            res.end('Welcome to user page');   
            break; 

        default:
            res.end('not found!');    
    }
    
});

// set port
const port = 5050;

// set listner
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


