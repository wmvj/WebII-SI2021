import http from "http"
const port = 3000

const rotas = {
    "/": 'Pagina Principal',
    "/produtos": "Entrei na pag de produtos",
    "/usuarios":"Entrei na pag de usuarios"
}

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})