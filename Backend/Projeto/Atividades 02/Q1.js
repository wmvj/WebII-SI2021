function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms)) 
}

delay(3000).then(() => console.log('Resolvido após 3 segundos!'))