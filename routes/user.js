
const express = require('express')
const router = express.Router();

const {GetAllUsers,PostNewUser,DeleteUserById} = require('../controller/user')

router.use(express.json());

const myModel = require('../model/user')

router.get('/',GetAllUsers)
router.post('/',PostNewUser)
router.delete('/:id',DeleteUserById)

module.exports = router






