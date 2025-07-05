// services/todoService.js
const db = require('../config/db');

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM todolist', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

exports.create = ({ title, completed = false }) => {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO todolist (task_name, isCompleted) VALUES (?, ?)',
      [title, completed],
      (err, results) => {
        if (err) reject(err);
        else resolve({ id: results.insertId, title, completed });
      }
    );
  });
};

exports.update = (id, { title, completed }) => {
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE todolist SET task_name = ?, isCompleted = ? WHERE id = ?',
      [title, completed, id],
      (err, results) => {
        if (err) reject(err);
        else resolve({ results});
      }
    );
  });
};

exports.delete = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM todolist WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      else resolve({ id });
    });
  });
};
