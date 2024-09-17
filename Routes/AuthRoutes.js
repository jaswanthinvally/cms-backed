const express = require('express')
const app = express()
const router = express.Router()
const Auth = require('../Controllers/Auth')



router.route('/signup').get(Auth.SignupController)
router.route('/login').get(Auth.LoginController)

module.exports = router