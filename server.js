const express=require('express')
const app=express() 

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

app.get("/",(req,res)=>{
   res.json(data)
})

app.listen(3000,()=>{
   console.log("server is running 3000");
})