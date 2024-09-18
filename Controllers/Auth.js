const express = require('express')
const app = express()

exports.LoginController = (req,res) => {
    res.json({
        message : "login"
    })

}
exports.SignupController = async (req,res) => {
    const {name,password} = req.body

    await UserAuthModel.create({
        name,
        password
    }).then((result) => res.json({message:"user created", result: result}))
    .catch((err) => res.json({message:"user creation failed", result:err}) )

}