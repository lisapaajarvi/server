const colors = require('colors');
const http = require('http');


console.log('Hello world'.rainbow.bgWhite);
console.log('Hello world'.green.underline);
console.log('Hello world'.rainbow);

const server = http.createServer((request, response) =>{
    response.write('Hello World')
    response.end('...')
});

server.listen(3000, 'localhost', ()=>{
    //servern igång
}
)