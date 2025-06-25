import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() == '') {
            alert("Seriously🙄? Please write your task first 😊")
            return;
        }
        onAddTask(input);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center gap-3 mt-3">
            <input
                className="form-control"
                placeholder="Write Your Task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-primary w-50 border-10 rounded-pill" onClick={handleSubmit}>
                ADD TASK
            </button>
        </form>
    );
};

export default TaskInput;
