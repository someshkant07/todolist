const AddTaskComponent = (props) => {
  const { task, setTask, onAddButtonHandler } = props;
  return (
    <div className="addTask">
      <div>
        <input
          className="taskInput"
          value={task.taskTitle}
          placeholder="Write Your task"
          onChange={(e) => {
            const obj = { ...task };
            obj.taskTitle = e.target.value;
            setTask(obj);
          }}
        />
      </div>
      <div>
        <input
          className="taskInput"
          value={task.description}
          placeholder="Task Description"
          onChange={(e) => {
            const obj = { ...task };
            obj.description = e.target.value;
            setTask(obj);
          }}
        />
      </div>
      <div>
        <button className="addButton" onClick={() => onAddButtonHandler(task)}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTaskComponent;
