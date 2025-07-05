import React from 'react';

const TaskItem = ({ task, index, toggleComplete, editTask, deleteTask }) => {
    return (
        <div className="d-flex justify-content-between align-items-center mb-2 p-2 border rounded bg-white gap-3">
            <span key={task.id} className='text-start' style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.task_name}
            </span>
            <div className="d-flex align-items-center border-start">
                <button
                    onClick={() => toggleComplete(index)}
                    className={`btn btn-sm  ${task.completed ? 'text-success' : ''}`}
                >
                    <i className={`fa${task.completed ? 's' : 'r'} fa-check-square`}></i>
                </button>

                <button onClick={() => editTask(task.id)} className="btn btn-sm me-1">
                    <i className="fas fa-pen"></i>
                </button>
                <button onClick={() => deleteTask(task.id)} className="btn btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
