const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const Produtos = require("./models/Produtos");

// configurando body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.post("/cadastro", function(req,res){
   Produtos.create({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao
    }).then(function(){
        res.send("Produto cadastrado!");
    }).catch(function(erro){
        res.send("Erro ao cadastrar produto " + erro);
    })
});
app.get("/", function(req,res){
    Produtos.findAll().then(function(produtos){
        res.send({produtos: produtos});
    }).catch(function(erro){
        res.send("Erro ao buscar os dados" + erro);
    });
    // uso do método findAll do Sequelize
});

app.patch("/atualizar/:id", function(req, res){
    Produtos.update({
        nome: req.body.nome,
        preco: req.body.preco,
        descricao: req.body.descricao},
        {where: {"id" : req.params.id}}
    ).then(function(){
        res.send("Sucesso ao atualizar os dados do produto!");
    }).catch(function(erro){
        res.send("Erro ao atualizar os dados do produto: " + erro);
    })
    // .update é método de atualizar do Sequelize
})

app.delete("/deletar/:id" , function(req, res){
    Produtos.destroy({where:{"id": req.params.id}}).then(function(){
        res.send("Produto deletado com sucesso!");
    }).catch(function(erro){
        res.send("Não foi possível deletar o produto: " + erro);
    })
})

app.get("/:nome", function(req, res){
    Produtos.findAll({where: {"nome": req.params.nome}}).then(function(produto){
        res.send(produto);
    }).catch(function(erro){
        res.send("Erro ao realizar a consulta " + erro);
    })
})
app.get("/", function(req, res){
    res.send("Mensagem - teste de rota principal");
});

// app.get("/rota2", function(req,res){
//     res.send("Mensagem - teste de rota 2");
// });

// app.get("/rota3", function(req,res){
//     res.send("Mensagem - teste de rota 3");
// });

// app.get("/rota55/:id", function(req, res){
//     if(req.params.id == 1){
//         res.send("Parabens você está agora na primeira rota segura do site!");
//     }else if(req.params.id == 2){
//         res.send("Parabens você está agora na segunda rota segura do site!");
//     }else{
//         res.send("Nenhuma rota encontrada")
//     }
// });

app.listen(3000, function(){
    console.log("Servidor rodando")
});