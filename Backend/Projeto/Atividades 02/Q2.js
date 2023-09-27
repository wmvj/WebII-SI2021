async function fetchData(input){
    if(input === "error"){
        throw new Error("Entrada inválida")
    }
    return `Dados para ${input}`
}

// Testando
fetchData("data")
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message))
fetchData("error")
  .then((data) => console.log(data))
  .catch((err) => console.error(err.message))