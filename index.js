const express = require('express')
const app = express()
const port = process.env.PORT


app.listen(port, console.log('the server is running in the port : ',port))