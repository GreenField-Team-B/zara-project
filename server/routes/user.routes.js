const express = require('express')
const { signUp, loginByEmail, loginByPhoneNumber,getAllUsers } = require('../controller/user.controller')
const router = express.Router()

router.get("/getAll",getAllUsers)
router.post("/signup",signUp)
router.post("/loginByEmail",loginByEmail)
router.post("/loginByPhoneNumber",loginByPhoneNumber)
module.exports = router