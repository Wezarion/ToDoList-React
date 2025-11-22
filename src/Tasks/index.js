import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li
            key={task.id}
            className={`tasks__item${task.done && props.hideDone ? " tasks__item--hiden" : ""}`}>
               <button className=" buttons tasks__content buttons__done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__content ${ task.done ? " tasks__content--done" : ""}`}>
                    {task.content}
                </span>
                <button className=" buttons tasks__content buttons__remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;