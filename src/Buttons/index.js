import "./style.css";

const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null;
    }

    return (
        <div className="buttons">
            <button className="buttons buttons__hiden">
                {props.hideDones ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button 
                className="buttons buttons__hiden"
                disabled={props.tasks.every(({ done }) => done)}
            > 
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;