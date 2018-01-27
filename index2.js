const knex = require("./config").knex

let nomejogador = "Marcos"
let numerojogador = 12
let jogador = {nomejogador,numerojogador}

knex('jogador').insert(jogador, "idjogador").then( ret => {
console.log(ret)
process.exit(0)
})