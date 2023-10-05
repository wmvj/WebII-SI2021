import express from "express";

const app = express()
app.use(express.json())

const livros = [
    {id:1, titulo: "Harry Potter"},
    {id:2, titulo: "Logica de programação"},
    {id:3, titulo: "A biblia"}
]

app.get("/", (req, res) => {
    res.status(200).send("Aula de Node e Express")
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
})

app.get("/livros/:id", (req, res) => {
    let index = buscaLivros(req.params.id)
    res.status(200).json(livros[index])  
})

app.post("/livros", (req, res) => {
    livros.push(req.body)
    res.status(201).send("Este livro foi adicionado")
})

app.put("/livros/:id", (req, res) => {
  let index = buscaLivros(req.params.id)
  livros[index].titulo = req.body.titulo
  res.status(200).json(livros)  
})

app.delete("/livros/:id", (req, res) => {
    
    let {id} = req.params
    let index = buscaLivros(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} foi removido`) 
  })

function buscaLivros(id){
    return livros.findIndex(livro => livro.id === Number(id))
}

export default app