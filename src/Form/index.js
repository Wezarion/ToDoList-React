import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event => {
        event.preverntDefault();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    });

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input 
                value={newTaskContent}
                className="form__input" 
                placeholder="Co do zrobienia?"
                onChange={({target}) => setNewTaskContent(target.value)} 
            />
            <button className="form__button">Dodaj Zadanie</button>
        </form>
    );
};

export default Form;