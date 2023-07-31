console.log("Exercicio 1")

let prompt = require ("prompt-sync") ();

let usuario = prompt ("Digite seu usuario:")
let senha = prompt("Digite sua senha:")

if (usuario == "admin" && senha == "senha123") {
    console.log ("Login bem sucedidio")
}
else {
    console.log ("Usuario ou senha incorretos")
}