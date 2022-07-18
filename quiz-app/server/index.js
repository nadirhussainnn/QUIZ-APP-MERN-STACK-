const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const fileUpload=require('express-fileupload')
const path=require('path')

dotenv.config()
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())
app.use(express.static(path.resolve(__dirname,'/public')))

const DB=process.env.DB_URL

mongoose.connect(DB).then(connection=>{
    console.log(`Connected to ${DB}`)
})

module.exports=app

//npm i express mongoose dotenv cors mongoose-unique-validator bcrypt jsonwebtoken nodemon express-fileupload body-parser supertest
//npm i --save-dev jest