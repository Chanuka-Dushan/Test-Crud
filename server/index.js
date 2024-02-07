const express= require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const UserModel=require('./models/Users.js')

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Dushan:Dushan0503@cluster0.u6sdqpo.mongodb.net/?retryWrites=true&w=majority")
app.post("/createUser",(req,res)=>{
    UserModel.create(req.body).then(users=>res.json(users)).catch(err=>res.json(err))
})

app.listen(3000,()=>{
    console.log("server is running");
})

