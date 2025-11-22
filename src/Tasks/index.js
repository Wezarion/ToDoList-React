import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
            key={task.id}
            className={`tasks__item${task.done && hideDone ? " tasks__item--hiden" : ""}`}>
                <button 
                    className=" tasks__button--done tasks__content"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__content ${ task.done ? " tasks__content--done" : ""}`}>
                    {task.content}
                </span>
                <button 
                    className=" tasks__buttons--remove tasks__content"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;