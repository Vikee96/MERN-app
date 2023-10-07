
const express = require('express')
const { getTasks, postTask, getTask, updateTask, deleteTask } = require('../controllers/taskControllers')

const taskRouter = express.Router()

taskRouter.route('/task').get(getTasks).post(postTask)
taskRouter.route('/task/:id').get(getTask).put(updateTask).delete(deleteTask)


module.exports = taskRouter