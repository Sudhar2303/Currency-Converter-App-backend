require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const route = require('./Routers/currencyRoute')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3500

app.get('/',(request,response)=>
{
    response.status(200).send({message : 'the server is running successfully'})
})

app.use(cors())
app.use(express.json())

app.use('/api/v1/currency',route)

mongoose.connect(process.env.DB_URL)
const DB = mongoose.connection
DB.on('error',(error)=>console.log(error.message))
DB.once('open',()=>console.log('DataBase is connected successfully'))

app.listen(PORT,console.log(`the server is running at port ${PORT}`))