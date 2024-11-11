// function getUser(userId) {
//     fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error => console.log(error))
//       .finally(() => console.log('Requisição finalizada'));
// }
   
// getUser(1); // "Nome Sobrenome"


const endpoints = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4"
]
   
const promises = endpoints.map(url => fetch(url).then(res => res.json()))
   
Promise.all(promises)
    .then(json => console.log(json))

