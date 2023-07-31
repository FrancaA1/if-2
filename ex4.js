console.log("Exercicio 1")

let prompt = require ("prompt-sync") ();

let idade = parseInt (prompt(" Digite sua idade"))

if (idade >= 18) {
    console.log("Voce é maior de idade")
}else {
    console.log("Voce é de menor")
}