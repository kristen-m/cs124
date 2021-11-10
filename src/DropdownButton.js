function DropdownButton(props) {
    //this is definitely not the right way to do this...but i could not think of the right way so here ya go :))
    let displayBlock = false;
    return <div className="dropdown" id="view-button">
        {/*add an onclick to this button that toggles the dropdown menu on/off when clicked to add tabbing*/}
        <button className="menu-buttons" onClick={displayBlock = !displayBlock} >{props.name}<span className="small-triangle"> ▼ </span></button>
        <div className="dropdown-content" style={{display: displayBlock ? "none" : "block"}}>
            <button className="dropdown-item" onClick={() => {
                if(props.id === "trash") {
                    props.toggleModal();
                    props.setCurrentDeleteOption(props.options.option1);
                } else {
                    props.deleteOrView(props.id, props.options.option1);
                }
            }}>{props.options.option1}</button>
            <button className="dropdown-item" onClick={() => {
                if(props.id === "trash") {
                    props.toggleModal();
                    props.setCurrentDeleteOption(props.options.option2);
                } else {
                    props.deleteOrView(props.id, props.options.option2);
                }
            }}>{props.options.option2}</button>
            <button className="dropdown-item" onClick={() => {
                if(props.id === "trash") {
                    props.toggleModal();
                    props.setCurrentDeleteOption(props.options.option3);
                } else {
                    props.deleteOrView(props.id, props.options.option3);
                }
            }}>{props.options.option3}</button>
        </div>
    </div>;
}

export default DropdownButton;