const mongoose=require('mongoose')

const quizSchema=mongoose.Schema({
    createBy:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    subject:{
        type:String,
        required:true
    },
    questions:[
        {
            text:{
                type:String,
                required:true
            },
            options:[]
        }
    ]
})

module.exports=mongoose.model('Quiz', quizSchema)