const mongoose = require('mongoose'); //mapeamento dos objetos em js 
                                      //conexão com o BD
mongoose.Promise = global.Promise; //usando a API de promise do NODE                                      
module.exports = mongoose.connect('mongodb://localhost/todo');
