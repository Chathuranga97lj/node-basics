// create server
const http = require('http');
const server = http.createServer((req, res) => {
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
});

// set port
const port = 5050;

// set listner
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


