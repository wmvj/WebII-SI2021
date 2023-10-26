const {Router} = require('express')
const AuthController = require("../controllers/authController.js")

const router = Router()

router
    .post('/auth/login', AuthController.login)

module.exports = router