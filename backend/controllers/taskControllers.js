const Task = require("../model/Task");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    res.status(200).json(tasks);
  } catch (error) {
    console.log(errors);
  }
};

const postTask = async (req, res) => {
  try {
    const { task, description, completed } = req.body;
    const payload = {
      task,
      description,
      completed,
    };
    const response = await Task.create(payload);
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
  }
};

const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById({ _id: id });
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const { task, description, completed } = req.body;
    const payload = { task, description, completed };
    const response = await Task.updateOne({ _id: id }, { $set: payload });
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Task.deleteOne({ _id: id });
    res.status(200).json(response)
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    getTasks, getTask, postTask, updateTask, deleteTask
}