import { Phrase } from "../models/phrase.js";

export const listPhrases = async (req, res) => {
    let list = await Phrase.findAll()
    res.json({list})
}

export const getPhrases = async (req, res) => {
    let {id} = req.params
    let phrase = await Phrase.findByPk(id)
    if(phrase){
        res.json({phrase})
    } else {
        res.json({erro: 'frase não foi encontrada'})
    }
}

export const createPhrase = async (req, res) => {
    let {author, txt} = req.body
    let newPhrase = await Phrase.create({author, txt})
    res.status(201).json({id: newPhrase.id, author, txt})
}

export const updatePhrase = async (req, res) => {
    let {id} = req.params
    let {author, txt} = req.body

    let phrase = await Phrase.findByPk(id)
    if(phrase){
        phrase.author = author
        phrase.txt = txt
        await phrase.save()
        res.json({phrase})
    } else {
        res.json({error: 'Frase não encontrada'})
    }
}

export const deletePhrase = async (req, res) => {
    let {id} = req.params
    await Phrase.destroy({where: {id}})
    res.json({message: "Frase deletada com sucesso"})
}

