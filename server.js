require('dotenv').config()


const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')


app.use(express.json())

const data = [
    {
        username: "ajsal",
        title: "post 1"
    },
    {
        username: "shahil",
        title: "post 2"
    },
    {
        username: "harshad",
        title: "post 3"
    }
]

app.get("/posts",authenticationToken, (req, res) => {
    res.json(data.filter(posts=>posts.username===req.user.name))
})

app.post("/login", (req, res) => {
    const username = req.body.username
    const user = { name: username }
    const acces_token = jwt.sign(user, process.env.ACCESS_TOKKEN_SECRET)
    res.json({ acces_tokken: acces_token })
})

function authenticationToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}


app.listen(3000, () => {
    console.log("server is running 3000");
})