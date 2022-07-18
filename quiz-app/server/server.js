const app=require('./index')

const port=process.env.PORT || 8081

console.log(port)
app.listen(port,()=>{
    console.log(`Server running at ${port}`)
})