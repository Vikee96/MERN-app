const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const taskRouter = require('./routes/taskRouters')

const app = express()

async function db(){
    await mongoose.connect('mongodb://127.0.0.1/Task-mern')
    console.log("db connected");
}
db()

app.use(cors())

app.use(express.json())

app.use('/task-manager',taskRouter)

app.listen(4999,(err)=>{
    if(err) console.log(err);
    console.log("server is running on 4999");
})