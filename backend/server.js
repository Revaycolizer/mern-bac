require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const profileRoutes = require('./routes/profiles')


//epress app
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/profiles',profileRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
//listen
app.listen(process.env.PORT, ()=>{
    console.log("connected to mongo",process.env.PORT)
})
})
.catch((error)=>{
    console.log(error)
})




