const express = require('express')
const app = express()
const PORT = process.env.PORT || 6960
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true } , () =>console.log(`db connected`))

app.use(express.json())
app.use(cors())
app.use('/user', routesUrls)
app.listen(PORT, console.log(`connected on port ${PORT}`))