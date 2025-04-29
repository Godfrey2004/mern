const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port = 5000

const app = express()
app.use(express.urlencoded({ extended: true })); 
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/hotelDB')
const db = mongoose.connection
db.once('open',()=>{
    console.log('dbconnected')
})

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const User = mongoose.model ('User',userSchema)

app.post('/register',async(req,res)=>{
    const{ name,email,password}= req.body
    const user = new User ({name,email,password})
    await user.save()
    res.send('from submitted')
})


app.listen(port,()=>{
    console.log(server connected ${port})
})
