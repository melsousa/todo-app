//configurando para permitir acessar mais de uma porta

module.exports = function (req, res, next) {
    // cabeçalho
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next(); //seguindo para o próximo passo
}