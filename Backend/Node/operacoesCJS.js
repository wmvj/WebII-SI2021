// O objeto global exports é sempre definido internamente pelo Node.js.

// Assim, quando queremos exportar vários módulos, atribuímos estes módulos 
//como propriedades do objeto exports.



// primeira opção

// exports.soma = function (num1, num2){
//     return num1 + num2
// }

// exports.multiplicar = function (num1, num2){
//     return num1 * num2
// }

// // segunda opção

module.exports = {
    soma(num1, num2){
        return num1 + num2
    },
    multiplicar(num1, num2){
        return num1 * num2
    }
}

// terceira opção

// function soma(num1, num2){
//     return num1 + num2
// }

// function subtrai(num1, num2){
//     return num1 - num2
// }

// module.exports = soma
// module.exports = {soma, subtrai}
