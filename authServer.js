require('dotenv').config()


const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')


app.use(express.json())

app.post("/login", (req, res) => {
    const username = req.body.username
    const user = { name: username }
    const acces_token = generateAccesTokken(user)
    const refress_token=jwt.sign(user,process.env.REFRESH_TOKEN_SECRET)
    res.json({ acces_tokken: acces_token ,refress_token:refress_token})
})


function generateAccesTokken(user){
    return jwt.sign(user, process.env.ACCESS_TOKKEN_SECRET,{expiresIn:"15s"})
}


app.listen(4000, () => {
    console.log("server is running 4000");
})