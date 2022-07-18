const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const validator=require('mongoose-unique-validator')

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

userSchema.plugin(validator)

userSchema.pre('save', function(next){
    const user=this;
    bcrypt.hash(user.password, 5, function(err, hash){
        user.password=hash;
        next()
    })
})

module.exports=mongoose.model('User', userSchema)