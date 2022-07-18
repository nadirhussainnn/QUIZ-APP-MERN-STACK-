const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')
const bodyParser=require('body-parser')
const fileUpload=require('express-fileupload')
const path=require('path')
const user_route = require('./routes/userRoute')
const quiz_route = require('./routes/quizRoute')

dotenv.config()
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(fileUpload())
app.use(express.static(path.resolve(__dirname,'/public')))

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('Connected')
}).catch(error=>{
    console.log(error)
})

app.use('/', user_route)
app.use('/', quiz_route)

app.use('*',(req, res)=>{res.send('Page Not found')})

module.exports=app

//npm i express mongoose dotenv cors mongoose-unique-validator bcrypt jsonwebtoken nodemon express-fileupload body-parser supertest
//npm i --save-dev jest