const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const AuthRouter = require('./Routes/AuthRoutes')
app.use(express.json())


app.use("/api/v1",AuthRouter)

app.listen(port, console.log('the server is running in the port : ',port))