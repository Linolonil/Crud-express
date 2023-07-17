const tasksModels = require('../models/tasksModel');

const getAll = async(req, res) => {
  const tasks = await tasksModels.getAll();
  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const createdTask = await tasksModels.createTask(req.body);
  return res.status(201).json(createdTask);
};

const deleteTask = async (req, res) => {
  const {id} = req.params;

  await tasksModels.deleteTask(id);
  return res.status(204).json({message: 'Task deletada com sucesso'});
};

const updateTask = async (req, res) => {
  const {id} = req.params;

  await tasksModels.updateTask(id, req.body);
  return res.status(204).json();

};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
};