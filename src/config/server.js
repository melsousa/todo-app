const port = 3003;
const bodyParser = require('body-parser');
const express = require('express'); //servidor web
const server = express();
const allowCors = require('./cors');


//sempre que chegar uma requisição que a url seja essa (urlencoded) 
// que é o padrão de formulários, o body-parser vai suportar mais que o padrão
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function(){ //se ocorrer tudo ok
    console.log(`BACKEND is running on port ${port}.`);
})

module.exports  = server