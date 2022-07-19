const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const fileUpload=require('express-fileupload')
const path=require('path')
const todo_route = require('./routes/todoRoutes')

dotenv.config()
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(fileUpload())
app.use(express.static(path.join(__dirname,'/public')))

mongoose.connect(process.env.DB_URL).then(res=>{
    console.log(`Connected`)
})

app.use('/', todo_route)

app.listen(process.env.PORT,()=>{
    console.log(`Runnig ${process.env.PORT}`)
})