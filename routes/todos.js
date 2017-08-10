var express = require("express");
var todos = express.Router();

//definições das rotas
var todoIndex = 0;
var todosList = [];

/* GET home page. */
todos.get('/', function(req, res, next) {
   /* res.send("olá node  JS! Agora com nodemom"); */
   console.log("Recebemos uma requisição GET");
   res.status(200).json(todosList);
});

/* GET com parametros. */
todos.get('/:todoId', function(req, res, next) {
   /* res.send("olá node  JS! Agora com nodemom"); */
   console.log("Recebemos uma requisição GET");

   var todosFiltered = todosList.filter(function(todo,index){
        return todo.id === parseInt(req.params.todoId);
   });

   if (todosFiltered.length === 0){
       res.status(404).send();
       return;
   }

   res.status(200).json(todosFiltered[0]);
});

/* POST home page. */
todos.post('/', function(req, res, next) {
   console.log("Recebemos uma requisição POST");
   console.log("Título: " + req.body.title);
   console.log("Descrição: " + req.body.description);
   res.status(200).send();
   var todo = req.body;
   todo.id = todoIndex++;
   todosList.push(todo);
});

module.exports = todos;