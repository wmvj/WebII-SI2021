async function fetchDataFromAPI(url){
    let response = await fetch(url)
    if(response.status !== 200){
        throw new Error("Falha na comunicação com a API")
    }
    return await response.json()
}

// Testando

fetchDataFromAPI("https://jsonplaceholder.typicode.com/users/1")
 .then((data) => console.log(data))
 .catch((err) => console.error(err.message))
