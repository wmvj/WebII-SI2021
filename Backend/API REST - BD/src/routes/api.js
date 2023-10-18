import {Router} from "express"
import * as apiController from "../controllers/apiController.js"

const router = Router()

router.get("/frases",apiController.listPhrases)
router.get("/frases/:id",apiController.getPhrases)


export default router
