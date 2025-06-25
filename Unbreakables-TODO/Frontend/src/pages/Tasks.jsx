import React, { useEffect, useState } from "react";
import TaskItem from "../components/TaskItem";
import TaskInput from "../components/TaskInput";

const Tasks = () => {
  // Get tasks (load tasks just once when the page loads) from local Storage and if not found make it []
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("Evangadi-Todo")) || [];
  });

  // update the local storage whenever the tasks change
  useEffect(() => {
    localStorage.setItem("Evangadi-Todo", JSON.stringify(tasks));
  }, [tasks]);

  // Add Task Function
  const addTask = (text) => {
    // Check if task already exists
    const taskExists = tasks.some(
      (task) => task.text.toLowerCase() === text.toLowerCase()
    );

    if (taskExists) {
      alert("This task already exists!");
      return;
    }

    const newTasks = [...tasks, { text, completed: false }];
    setTasks(newTasks);
  };

  // Toggle Complete Function
  const toggleComplete = (index) => {
    /* Create a new tasks array / copy of tasks in a new memory so that react can detect the change and re-render the component since the address of the arrays are different
    */
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  // Edit Task Function
  const editTask = (index) => {
    const newText = prompt("Edit Task:", tasks[index].text);
    if (newText) {
      const newTasks = [...tasks];
      newTasks[index].text = newText;
      setTasks(newTasks);
    }
  };

  // Delete Task Function
  const deleteTask = (index) => {
    // create a new array without the index of the task to be deleted (excluding the task to be deleted) and re-render the component
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <div>
          <h6 className="text-center text-secondary m-4">
            No Pending Tasks! You are all set!
          </h6>
        </div>
      ) : (
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            toggleComplete={toggleComplete}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))
      )}
      <div>
        <TaskInput onAddTask={addTask} />
      </div>
    </div>
  );
};

export default Tasks;
