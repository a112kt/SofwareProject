
require('dotenv').config();

const express = require("express")
const  helmet  = require("helmet")
const cors = require('cors')
const cookieParser = require("cookie-parser")
const mongoose = require('mongoose');


const authRouter = require('./routers/authRouter')




const app = express()
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));



app.use(express.json())
app.get('/',(req,res)=>{
    res.json({message:"Hello from server"})
})

app.use('/api/auth',authRouter)


app.listen(process.env.port,()=>{
    console.log("Listening..")
})