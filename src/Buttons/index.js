import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="buttons buttons__hiden">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button 
                    className="buttons buttons__hiden"
                    disabled={tasks.every(({ done }) => done)}
                > 
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;