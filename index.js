
const express = require('express')

const app = express();

const mongoose = require('mongoose')

const userRouter = require('./routes/user')


mongoose.connect('mongodb+srv://konain7:Kaunain%4099@cluster0.rmyvhx6.mongodb.net/mymodelDB')
.then(()=>{console.log('db connected 4010')})



app.use('/',userRouter)



app.listen(4010,()=>{
    console.log('server running on 4010')
})