// É possível concentrar as exportações de módulos no fim do arquivo 
// export { soma, multiplica, subtrai }; e ao usar a desestruturação 
// para exportar e importar cada função em separado

// É muito comum o cenário onde apenas uma função ou classe deve ser 
// exportada, mesmo que existam outras funções, classes ou variáveis 
// no arquivo. Neste caso, utiliza-se export default



// primeira opção

// export function soma(num1, num2) {
//     return num1 + num2
// }

// export function multiplica(num1, num2) {
//     return num1 * num2
// }

// segunda opcao

function soma(num1, num2) {
    return num1 + num2
}

function multiplica(num1, num2) {
    return num1 * num2
}

export {soma, multiplica}

// terceira opcao

function soma(num1, num2) {
    return num1 + num2
}

function multiplica(num1, num2) {
    return num1 * num2
}

export default multiplica

