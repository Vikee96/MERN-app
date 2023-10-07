
const {Schema, model} = require('mongoose')

const taskSchema = new Schema({
    task : String,
    description : String,
    completed : Boolean
})

const Task = model('Task',taskSchema)
module.exports = Task;