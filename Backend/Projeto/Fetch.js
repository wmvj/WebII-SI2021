const endpoints = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/3",
    "https://jsonplaceholder.typicode.com/users/4",
    "https://jsonplaceholder.typicode.com/users/5"
]

const promises = endpoints.map(url => fetch(url).then(res => res.json()))

Promise.all(promises)
  .then(valores => {console.log(valores)})
