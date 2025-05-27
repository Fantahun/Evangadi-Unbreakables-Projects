import Tasks from "./Tasks";
import todoIcon from "../assets/todo.svg";
const TasksPage = () => {
  return (
    <div
      className="container mt-5 p-4 rounded shadow bg-light"
      style={{ maxWidth: "500px", minWidth: "500px" }}
    >
      <div className="text-center mb-3">
        <img
          src={todoIcon}
          alt="todo"
          className="img-fluid"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <h3 className="text-center text-secondary">UNBREAKABLES</h3>
      <hr className="border-1 border-secondary" />
      {/* <h5 className="text-center text-primary mb-4">TO DO LIST</h5> */}
      <Tasks />
    </div>
  );
};

export default TasksPage;
