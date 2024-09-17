const express = require('express')
const app = express()

exports.LoginController = (req,res) => {
    res.json({
        message : "login"
    })

}
exports.SignupController = (req,res) => {
    res.json(
        {
            message : "signup"
        }
    )

}