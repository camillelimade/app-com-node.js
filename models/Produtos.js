const db = require('./db');
// a primeira linha define o nome da tabela Produtos no banco de dados, usando o método .define() do Sequelize
// Após isso, são criados os campos da tabela, no caso de produtos são estruturados 3 campos: nome, preço e descrição, que não podem ser nulos (allowNull: false)
const Produtos = db.sequelize.define("produtos", {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    preco: {
        type: db.Sequelize.DOUBLE,
        allowNull: false,
    },
    descricao:{
        type: db.Sequelize.TEXT,
        allowNull: false,
    }
    }
);
// Inserindo Produtos na nossa nova tabela via código, com o uso do método .create() em prol de testes
/*
Produtos.create({
    nome: "RTX 4060",
    preco: "3200.99",
    descricao: "Placa de vídeo da marca Nvidia."
});
*/

// Infelizmente a constante Produtos não está sendo usada, logo temos que forçar a criação dessa tabela com o método .sync()
Produtos.sync({
    force: false,
});
// É interessante manter o valor como false, para evitar a criação repetida da tabela, o que causaria a perda de dados já existentes, com o valor false a tabela será criada apenas se não existir

module.exports = Produtos;
