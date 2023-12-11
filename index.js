const express=require('express');
const {connection}=require("./db");
const {userRouter}=require("./routes/user.route")
const {postRouter}=require("./routes/post.route")

const app=express();

//middleware
app.use(express.json())

app.use("/users",userRouter)
app.use("/posts",postRouter)

app.listen(8080,async()=>{
try{
    await connection
    console.log("port running at 8080")
    console.log("connected to db")

}catch(err){
    console.log(err)
}
    
})