const express=require('express')
const { default: mongoose } = require('mongoose')
const app=express()


app.listen(3000,console.log("App is running on port 3000"))
app.get("/",(req,res)=>{
    res.status(200).send("Hello Broo Im Mosh here")
})
app.get("/M",(req,res)=>{
    res.send("Hey There But WHy did you came to this path")
})

mongoose.connect("mongodb+srv://maheshlucky:maheshlucky90926@realestate.ffwaal3.mongodb.net/fullpra?retryWrites=true&w=majority&appName=realestate").then(console
.log("Mongodb Database connected "))

