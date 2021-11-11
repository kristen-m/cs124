import {useState} from "react";

function DropdownButton(props) {
    const [drop, setDrop] = useState(false);
    return <div className="dropdown" id="view-button">
        <button className="menu-buttons" onClick={() => {setDrop(!drop)}}>{props.name}<span className="small-triangle"> ▼ </span></button>
        <div className="dropdown-content" style={{display: drop ? "block" : "none"}}>
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
            }} onKeyDown={(e) => {
                if(e.key === "Tab"){
                    if(drop){
                        setDrop(!drop);
                    }
                }
            }
            }>{props.options.option3}</button>
        </div>
    </div>;
}

export default DropdownButton;