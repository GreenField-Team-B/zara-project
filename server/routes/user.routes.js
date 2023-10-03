const express = require('express')
const { signUp, loginByEmail, loginByPhoneNumber } = require('../controller/user.controller')
const router = express.Router()

router.post("/signup",signUp)
router.post("/loginByEmail",loginByEmail)
router.post("/loginByPhoneNumber",loginByPhoneNumber)
module.exports = router