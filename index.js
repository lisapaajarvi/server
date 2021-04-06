const colors = require('colors');
const http = require('http');
const fs = require('fs');


console.log('Hello world'.rainbow.bgWhite);
console.log('Hello world'.green.underline);
console.log('Hello world'.rainbow);

const server = http.createServer((request, response) =>{
    console.log(request.socket.remoteAddress.magenta);    
    fs.readFile('./index.html', (err, data) => {
        if(err) {
            console.error(err);
            response.statusCode = 500;
            response.end();
        }
    })
    response.write('Hello World');
    response.end('...');

});

server.listen(3000, 'localhost', ()=>{
    console.log('Server igång på http://localhost:3000'.green)
}
)