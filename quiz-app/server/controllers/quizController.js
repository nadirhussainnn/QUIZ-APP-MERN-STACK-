const Quiz=require('../models/quizModel')
const User=require('../models/userModel')

const createQuiz=async(req, res)=>{
    console.log(`Create Quiz API`)
    
    const {subject, questions, createdBy}=req.body
    //questions are along with options, array like [{text:'Hello',options:['A','B','C','D']}]

    try{

        const user=await User.findById(createdBy)

        if(user){
            const quiz=await Quiz.create({subject, questions, createdBy})
            if(quiz){
                res.status(200).send({success:true, msg:'Created Quiz Successfully', data:quiz})
            }
            else{
                res.status(400).send({success:false, msg:'Failed to create'})
            }
        }
        else{
            res.status(400).send({success:false, msg:'Invalid user details'})
        }
    }
    catch(error){
        res.status(400).send(error.message)
    }
}

const attemptQuiz=async(req, res)=>{
    console.log(`Login API`)
    
    const {studentId, quizId}=req.body

    try{

        const user=await User.findById(studentId)

        if(user){
            const quiz=await Quiz.findById(quizId)
            res.status(200).send({success:true, msg:'Failed to create', data:quiz})
        }
        else{
            res.status(400).send({success:false, msg:'Invalid student details'})
        }
    }
    catch(error){
        res.status(400).send(error.message)
    }
}

module.exports={
    createQuiz, attemptQuiz
}