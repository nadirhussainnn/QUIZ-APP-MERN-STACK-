const express=require('express')
const { createQuiz, attemptQuiz } = require('../controllers/quizController')
const quiz_route=express()

quiz_route.post('/create-quiz', createQuiz)
quiz_route.post('/attempt-quiz', attemptQuiz)

module.exports=quiz_route