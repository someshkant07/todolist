import { useState } from "react";
import AddTaskComponent from "../add-task";
import ShowTaskListComponent from "../show-task-list";
import Styles from "./index.module.css";
import { toast } from "react-toastify";

const LandingPage = () => {
  const [task, setTask] = useState({
    taskTitle: "",
    description: "",
  });
  const [taskList, setTaskList] = useState([]);

  const onAddButtonHandler = (task) => {
    if (task.taskTitle.length > 0 && task.description.length > 0) {
      const tempArr = [...taskList];
      tempArr.push(task);
      setTaskList(tempArr);
      setTask({ taskTitle: "", description: "" });
      toast.success("Task Added");
    } else {
      if (task.taskTitle.length === 0) {
        toast.warning("Task list is empty");
      } else {
        toast.warning("Description is empty");
      }
    }
  };
  return (
    <div>
      <div className="mainHeader">
        <h2>To Do Task List</h2>
      </div>
      <AddTaskComponent
        task={task}
        setTask={setTask}
        onAddButtonHandler={onAddButtonHandler}
      />
      <ShowTaskListComponent taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default LandingPage;
