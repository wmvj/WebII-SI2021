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