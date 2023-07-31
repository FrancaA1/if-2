console.log("Exercicio 1")

let prompt = require ("prompt-sync") ();

let numero = parseInt (prompt("Digite um numero de 1 a 7 "))

if (numero == 1) {
    console.log (" Esse numero representa Segunda-Feira")
}
else if (numero == 2){
    console.log (" Esse numero representa Terca-Feira")
}
else if (numero == 3){
    console.log (" Esse numero representa Quarta-Feira")
}
else if (numero == 4){
    console.log (" Esse numero representa Quinta-Feira")
}
else if (numero == 5){
    console.log (" Esse numero representa Sexta-Feira")
}
else if (numero == 6){
    console.log (" Esse numero representa Sabado")
}
else if (numero == 7){
    console.log (" Esse numero representa Domingo")
}
else {
    console.log (" numero invalido")
}