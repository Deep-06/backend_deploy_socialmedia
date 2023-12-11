const mongoose=require("mongoose");

//schema

const postSchema=mongoose.Schema({
    title: String,
    body:String,
    device:String,
    userID:String,
    username:String
},{
    versionKey:false
})

//model

const PostModel=mongoose.model("post",postSchema)

module.exports={
    PostModel
}