import React from 'react';

const TaskItem = ({ task, index, toggleComplete, editTask, deleteTask }) => {
    return (
        <div className="d-flex justify-content-between align-items-center mb-2 p-2 border rounded bg-white">
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                <p>{task.text}</p>
            </span>
            <div>
                <button
                    onClick={() => toggleComplete(index)}
                    className={`btn btn-sm  ${task.completed ? 'text-success' : ''}`}
                >
                    <i className={`fa${task.completed ? 's' : 'r'} fa-check-square`}></i>
                </button>

                <button onClick={() => editTask(index)} className="btn btn-sm me-1">
                    <i className="fas fa-pen"></i>
                </button>
                <button onClick={() => deleteTask(index)} className="btn btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
