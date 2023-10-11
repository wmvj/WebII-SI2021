import {Router} from "express"
import * as apiController from "../controllers/apiController.js"

const router = Router()

router.get("/frases",apiController.listPhrases)

export default router
