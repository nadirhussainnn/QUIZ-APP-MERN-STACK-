const express=require('express')
const { login, register } = require('../controllers/userController')
const user_route=express()

user_route.post('/register', register)
user_route.post('/login', login)

module.exports=user_route