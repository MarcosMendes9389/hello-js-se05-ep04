const knex = require("./config").knex

operacao = process.argv[2]
dado = process.argv[3]
let id 
let nome 
let telefone 
let contato 

switch(operacao){
case 'insert':

    array = dado.split(",")

     nome = array[0]
     telefone = array[1]
     contato = {nome,telefone}
    
    knex('contato').insert(contato, "id").then( ret => {
    console.log(ret)
    process.exit(0)
    })

    break;

case'update':
    array = dado.split(",")

     id = array[0]
     nome = array[1]
     telefone = array[2]
     contato = {nome,telefone}

    
    knex("contato").update(contato).where({id}).then(ret => {
    console.log(ret)
    process.exit(0)
  })


case 'delete':
    
    knex("contato").del().where({dado}).then(ret => {
        console.log(ret)
        process.exit(0)
      })

break;

case 'list':
    
  //Select * from jogador where numerojogador = 1
  knex("contato").select().then(ret => {
    console.log(ret)
    process.exit(0) // finalizar execução do script
  })

default:
console.log("Comando invalido");
return "";

}




