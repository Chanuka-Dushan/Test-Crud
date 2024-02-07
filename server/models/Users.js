const mongoose=require('mongoose')

const UserShema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const UserModel=mongoose.model("users",UserSchema)
module.exports=UserModel