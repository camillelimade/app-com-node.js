const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    "cadastro",
    "root",
    "0799",
    {
        host: "localhost",
        dialect: "mysql",
    }
);
// verificando se o banco de dados foi autenticado com sucesso, com o método .then()
sequelize.authenticate().then((function(){
    console.log("Conectado ao banco de dados com sucesso!");
})).catch(function(erro){
    console.log("Falha ao se conectar ao banco de dados: " + erro);
});

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize,
};