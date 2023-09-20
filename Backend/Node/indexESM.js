// primeira opção

// import {soma, multiplica} from './operacoesESM.js'

// console.log(soma(4,2))
// console.log(multiplica(4,2))


// segunda opção

// import * as operacoes from './operacoesESM.js'

// console.log(operacoes.soma(4,2))
// console.log(operacoes.multiplica(4,2))

// terceira opção

import multiplica from "./operacoesESM.js";

console.log(multiplica(4,2))