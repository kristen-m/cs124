import Alert from "./Alert";


function DropdownButton(props) {
    return <div className="dropdown" id="view-button">
        <button className="menu-buttons">{props.name}<span className="small-triangle"> ▼ </span></button>
        <div className="dropdown-content">
            <button onClick={() => {
                console.log("before set");
                props.setCurrentDeleteOption(props.options.option1);
                console.log("after del opt");
                props.toggleModal();
            }}>{props.options.option1}</button>
            <button onClick={() => {props.deleteOrView(props.id, props.options.option2)}}>{props.options.option2}</button>
            <button onClick={() => {props.deleteOrView(props.id, props.options.option3)}}>{props.options.option3}</button>
        </div>
    </div>;
}

export default DropdownButton;