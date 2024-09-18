const UserAuthModel = require("../Models/UserAuthModel");

const UserAuth = async (req,res) => {
    const {name,password} = req.body

    await UserAuthModel.create({
        username,
        password
    }).then((result) => console.log("user creation sucessful"))
    .catch((err) => console.log("the error is : ",err))
}