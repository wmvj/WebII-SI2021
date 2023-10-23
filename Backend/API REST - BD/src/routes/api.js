import {Router} from "express"
import * as apiController from "../controllers/apiController.js"

const router = Router()

router.get("/frases",apiController.listPhrases)
router.get("/frases/:id",apiController.getPhrases)
router.post("/frases",apiController.createPhrase)
router.put("/frases/:id",apiController.updatePhrase)
router.delete("/frases/:id",apiController.deletePhrase)

export default router
