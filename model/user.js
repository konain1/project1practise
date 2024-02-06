

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})


const myModel = new mongoose.model('userAssignment',userSchema);

// const superHero = new myModel({first_name:'alon mask' , email:'alonm ask@gmail.com'})

module.exports = myModel