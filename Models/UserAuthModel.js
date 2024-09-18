const mongoose = require('mongoose')

const UserAuthSchema = mongoose.Schema({
    name: String,   
    password:String
})

const UserAuthModel = mongoose.model('UserAuthModel',UserAuthSchema)

module.exports = UserAuthModel