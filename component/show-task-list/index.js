const ShowTaskListComponent = (props) => {
  const { taskList, setTaskList } = props;
  const deleteTaskHandler = (idx) => {
    const arr = [...taskList];
    arr.splice(idx, 1);
    setTaskList(arr);
  };
  return (
    <div className="taskList">
      {taskList.length > 0 ? (
        <table>
          <tr>
            <th>Sl.No</th>
            <th>Title</th>
            <th>Description</th>
            <th></th>
          </tr>
          {taskList.map((el, idx) => {
            return (
              <tr key={idx}>
                <td>{idx}</td>
                <td>{el.taskTitle}</td>
                <td>{el.description}</td>
                <td style={{ textAlign: "center" }}>
                  <svg
                    onClick={() => {
                      deleteTaskHandler(idx);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    class="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </td>
              </tr>
            );
          })}
        </table>
      ) : (
        <p style={{ textAlign: "center" }}>No Task Yet</p>
      )}
    </div>
  );
};

export default ShowTaskListComponent;
