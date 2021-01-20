const Todo = require('./todo');
//methods
Todo.methods(['get', 'post', 'put', 'delete']);

//o padrão do node-restful ao atualizar retorna o valor antigo
//habilitando para trazer o valor atualizado
//validando as atualizações 
Todo.updateOptions({ new: true, runValidation: true });
module.exports = Todo;