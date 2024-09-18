const express = require('express')
const app = express()
const router = express.Router()
const Auth = require('../Controllers/Auth')
const UserAuthModel = require('../Models/UserAuthModel')



router.route('/signup').post(async(req,res) => {
    const name = req.body.name
    const password = req.body.password

   await UserAuthModel.create({
        name,
        password
    }).then((result) => res.json({result : `data creation sucessful : ${result}`}))
    .catch((err) => res.json({error : err}) )

    await res.json({
        name : name,
        password : password
    })

})
router.route('/login').get(Auth.LoginController)
router.route('/test').get((req,res) => res.json({
    status : "sucess"
}) )

module.exports = router