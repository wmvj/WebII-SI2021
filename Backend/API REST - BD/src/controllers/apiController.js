import { Phrase } from "../models/phrase.js";

export const listPhrases = async (req, res) => {
    let list = await Phrase.findAll()
    res.json({list})
}