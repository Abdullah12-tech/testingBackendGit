const express = require('express');
const userRouter = require('./router/userrouter');
const app = express()

app.use(express.json())

const PORT = 4000

app.listen(PORT, ()=>{
  console.log("listening to port 4000");
  
})


app.get("/user", (req, res)=>{
  res.send({
    message:'user is here'
  })
})



app.use("/api/users", userRouter)


