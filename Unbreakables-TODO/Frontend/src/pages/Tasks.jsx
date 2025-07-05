import React, { useEffect, useState } from "react";
import TaskItem from "../components/TaskItem";
import TaskInput from "../components/TaskInput";
import axios from "axios";

const Tasks = () => {
  // Get tasks (load tasks just once when the page loads) from local Storage and if not found make it []
  const [tasks, setTasks] = useState([]);

  // update the local storage whenever the tasks change
  // useEffect(() => {
  //   // localStorage.setItem("Evangadi-Todo", JSON.stringify(tasks));

  // }, [tasks]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/todos/");
        setTasks(response.data); // Set tasks in state
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []); // Only run on mount

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
  // const editTask = async (id, index) => {
  //     const currentTask = tasks[index];
  //   const newText = prompt("Edit Task:", currentTask.task_name); // ✅ uses task_name

  //     if (newText) {
  //       // const newTasks = [...tasks];
  //       // newTasks[index].task_name = newText;
  //       // setTasks(newTasks);
  //        try {
  //     const updatedTask = {
  //       title: newText,
  //       completed: tasks[index].isCompleted, // keep the same completion state
  //     };

  //     await axios.put(`http://localhost:5000/api/todos/${taskID}`, updatedTask);

  //     // Update local state
  //     const newTasks = [...tasks];
  //     newTasks[index] = { ...newTasks[index], task_name: newText };
  //     setTasks(newTasks);
  //   } catch (err) {
  //     console.error("Error updating task:", err);
  //     alert("Failed to update task.");
  //   }
  //     }
  //   };
  const editTask = async (id) => {
    const currentTask = tasks.find((t) => t.id === id); // ✅ safer and reliable

    if (!currentTask) {
      alert("Task not found!");
      return;
    }

    const newText = prompt("Edit Task:", currentTask.task_name);

    if (!newText || newText.trim() === "") return;

    try {
      const updatedTask = {
        title: newText,
        completed: currentTask.isCompleted,
      };

      await axios.put(`http://localhost:5000/api/todos/${id}`, updatedTask);

      // Update local state
      const updatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, task_name: newText } : task
      );

      setTasks(updatedTasks);
    } catch (err) {
      console.error("Error updating task:", err);
      alert("Failed to update task.");
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
            key={task.id}
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
