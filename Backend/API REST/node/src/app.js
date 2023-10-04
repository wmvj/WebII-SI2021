import express from "express";

const app = express()

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

export default app