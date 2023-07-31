console.log("Exercicio 1")

let prompt = require ("prompt-sync") ();

let valor = parseFloat (prompt(" Digite o valor da sua compra"))

if (valor >= 200) {
    valor = valor - valor*0.20
    console.log("O novo valor com desconto é: "+valor.toFixed(2))
}
else if (valor > 100) {
    valor = valor - valor*0.10
    console.log("O novo valor com desconto é: "+valor.toFixed(2))
}else {
        console.log("O valor da sua compra é: " + valor)
    }
