const connection = require('./connection');

const getAll = async () => {
  const [tasks] = await connection.execute('select * FROM tasks');
  return tasks;
};
const createTask = async(task) =>{
  const { title } = task;
  const query = 'INSERT INTO tasks(title, status, created_at) VALUES(?, ?, ?)';

  const dataUtc = new Date(Date.now()).toUTCString();
  const [createdTask] = await connection.execute(query, [title, 'Pendente', dataUtc]);
  return {insertId: createdTask.insertId };
}; 

const deleteTask = async (id) => {
  const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
  return removedTask;
};
const updateTask = async (id, task) => {
  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
  const {title, status} = task;

  const [updateTask] = await connection.execute(query, [title, status, id]);
  return updateTask;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
};
