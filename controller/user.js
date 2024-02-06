
const express = require('express')

const app = express();

const myModel = require('../model/user');

async function GetAllUsers(req,res){

    
    let allData = await myModel.find()
    console.log(allData)
    res.json(allData)

}


async function DeleteUserById(req,res){
    const id  = req.params.id
    
    
    try {
            // let user = await myModel.findOne({_id:id})
    let user = await myModel.findByIdAndDelete({_id : id})
    
    res.json({msg:`user is Deleted ${user}`})
        
    } catch (error) {
        console.log('somthing wrong')
    }


}


// async function DeleteUserById(req,res){
//     const id  = req.params.id

//     try {
//         let deleteuser = await myModel.findByIdAndDelete({_id : id})
//         res.json(deleteuser)
        
//     } catch (error) {
//         res.status(403).json({msg:'invalid input or id'})
//     }
// }


async function PostNewUser(req,res){

    // let {first_name,email} = req.body
    let first_name = req.body.first_name;
    let email = req.body.email;

    const result = await myModel.create({
        first_name:first_name,
         email:email,
    })
    await result.save()

    res.json({msg:`new user added`})
   
}


module.exports = {
    GetAllUsers,
    PostNewUser,
    DeleteUserById
}