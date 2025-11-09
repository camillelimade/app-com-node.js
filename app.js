const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("Mensagem - teste de rota");
});

app.get("/rota2", function(req,res){
    res.send("Mensagem - teste de rota 2");
});

app.get("/rota3", function(req,res){
    res.send("Mensagem - teste de rota 3");
});

app.get("/rota_segura", function(req, res){
    if(req.params.id == "1"){
        res.send("Parabens você está agora na rota segura do site!");
    }
});

app.listen(3000, function(){
    console.log("Servidor rodando")
});