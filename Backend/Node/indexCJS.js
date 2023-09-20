// primeira opção

// const operacoes = require('./operacoesCJS.js')

// const soma = operacoes.soma(4,2)
// console.log(soma)

// segunda opção

const {soma, multiplicar} = require('./operacoesCJS.js')

console.log(soma(4,2))
console.log(multiplicar(4,2))
