console.log("Exercicio 1")

let prompt = require ("prompt-sync") ();

let altura = parseFloat (prompt(" Digite sua altura"))
let peso = parseFloat (prompt(" Digite seu peso"))

imc = peso / (altura*altura);

if (imc >= 40) {
    console.log ("Obesidade grau 3")
}
else if (imc >= 35) {
    console.log("Obesidade grau 2")
}
else if (imc >= 30) {
    console.log("Obesidade grau 1")
}
else if (imc >= 25) {
    console.log("Sobrepeso")
}
else if (imc >= 18.5) {
    console.log("Peso normal")
}
else {
    console.log("Abaixo do peso")
}