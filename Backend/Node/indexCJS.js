// Usamos require() para importar módulos do nosso próprio código, 
// passando como parâmetro uma string com o caminho relativo do arquivo 
// onde se encontram os módulos que queremos importar. 

// O retorno da função require() é normalmente a função, 
// classe ou objeto importado, que guardamos na variável 
// soma e outra se houver.


// A função require() no módulos CJS é sincrona de nmodo a bloquear a execução
// do código até que o módulo esteja totalmente carregado.  



// primeira opção

// const operacoes = require('./operacoesCJS.js')

// const soma = operacoes.soma(4,2)
// console.log(soma)

// segunda opção

const {soma, multiplicar} = require('./operacoesCJS.js')

console.log(soma(4,2))
console.log(multiplicar(4,2))
