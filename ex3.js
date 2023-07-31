console.log("Exercicio 1")

let prompt = require ("prompt-sync") ();

let n1 = parseInt (prompt(" Digite um numero"))
let n2 = parseInt (prompt(" Digite outro numero"))
let n3 = parseInt (prompt(" Digite mais um numero"))

if (n1 < n2 && n2 < n3 ) {
    console.log ("Os numeros estão em ordem crescente")
}
else {
    console.log ("Não esta na ordem")
}