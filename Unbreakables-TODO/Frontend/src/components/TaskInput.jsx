import React, { useState } from 'react';
import axios from 'axios';


const TaskInput = ({ onAddTask }) => {
    const [input, setInput] = useState('');

   async function handleSubmit(e) {
       
        e.preventDefault();
        if (input.trim() == '') {
            alert("Seriously🙄? Please write your task first 😊")
            return;
        }
       // onAddTask(input);


        // call api endpoint using axios
        try {
            const res = await axios.post('http://localhost:5000/api/todos/addTodo', {
                title: input,
                completed: false
            });

            // Notify parent with newly added task
            onAddTask(res.data.title);
            console.log(res.data);

            setInput('');
        } catch (err) {
            console.error('Error adding task:', err);
            alert('Failed to add task');
        }

    
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
