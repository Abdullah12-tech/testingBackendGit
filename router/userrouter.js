const express = require("express")
const userRouter = express.Router()


userRouter.get("/",(req, res)=>{
    res.send({
        message: 'i am developer'
    })
})






module.exports = userRouter