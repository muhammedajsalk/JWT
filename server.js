require('dotenv').config()


const express=require('express')
const app=express() 
const jwt=require('jsonwebtoken')


app.use(express.json())

const data=[
    {
        username:"ajsal",
        title:"post 1"
    },
    {
        username:"shahil",
        title:"post 2"
    },
    {
        username:"harshad",
        title:"post 3"
    }
]

app.get("/posts",(req,res)=>{
   res.json(data)
})

app.post("/login",(req,res)=>{
   const username=req.body.username
   const user={name:username}
   const acces_token=jwt.sign(user,process.env.ACCESS_TOKKEN_SECRET)
   res.json({acces_tokken:acces_token})
})

app.listen(3000,()=>{
   console.log("server is running 3000");
})