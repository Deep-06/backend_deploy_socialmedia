const mongoose=require("mongoose");

//schema

const userSchema=mongoose.Schema({
    username: String,
    email:String,
    gender:String,
    password:String
},{
    versionKey:false
})

//model

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}