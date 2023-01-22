const express = require("express")
const app = express()
const {connection} = require("./config/db")
const {userRouter} = require("./routes/userroute")
const {hotelrouter} = require("./routes/hotelroute")
const {authentication} = require("./middlewares/authenticator")
require('dotenv').config()
const cors = require("cors")


app.use(cors())
app.use(express.json())

app.use("/user",userRouter)
app.use(authentication)
app.use("/hotel",hotelrouter)


app.listen(process.env.port,async()=>{
    try {
      await connection
      console.log(`running at port ${4500}`)
    } catch (error) {
      console.log(error)
    }
  })