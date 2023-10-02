function firstPromisse(promises){
    return Promise.race(promises)
}

// Testando

const p1 = new Promise((resolve) => setTimeout(() => resolve("Primeira"),1000))
const p2 = new Promise((resolve) => setTimeout(() => resolve("Segundo"),3000))
firstPromisse([p1, p2]).then((result) => console.log(result))