import {useState} from "react";

function DropdownButton(props) {
    const [drop, setDrop] = useState(false);
    let buttonLabel = "View";
    return <div className="dropdown" id={props.id+"-button"} aria-label={props.id +" Selection Dropdown"}>
        <button className="menu-buttons" onClick={() => {setDrop(!drop)}}>{props.name}<span className="small-triangle"> ▼ </span></button>
        <div className="dropdown-content" style={{display: drop ? "block" : "none"}}>
            <button className={props.id+"-dropdown-item selected-dropdown-item"}  id="view-all-dropdown-item" onClick={() => {
                if(props.id === "Delete") {
                    props.toggleModal();
                    props.updateCurrentDeleteOption(props.options.option1);
                } else {
                    let currButton = document.getElementById("view-all-dropdown-item");
                    let completeButton = document.getElementById("view-complete-dropdown-item");                    let compButton = document.getElementById("view-all-dropdown-item");
                    let incompleteButton = document.getElementById("view-incomplete-dropdown-item");
                    completeButton.classList.remove("selected-dropdown-item");
                    incompleteButton.classList.remove("selected-dropdown-item");
                    currButton.classList.add("selected-dropdown-item");
                    props.deleteOrView(props.id, props.options.option1);
                }
                setDrop(!drop);
            }} aria-label={props.id +" "+ props.options.option1}>{props.options.option1}</button>
            <button className={props.id+"-dropdown-item"} id="view-complete-dropdown-item" onClick={() => {
                if(props.id === "Delete") {
                    props.toggleModal();
                    props.updateCurrentDeleteOption(props.options.option2);
                } else {
                    let currButton = document.getElementById("view-complete-dropdown-item");
                    let allButton = document.getElementById("view-all-dropdown-item");
                    let incompleteButton = document.getElementById("view-incomplete-dropdown-item");
                    allButton.classList.remove("selected-dropdown-item");
                    incompleteButton.classList.remove("selected-dropdown-item");
                    currButton.classList.add("selected-dropdown-item");
                    props.deleteOrView(props.id, props.options.option2);
                }
                setDrop(!drop)
            }} aria-label={props.id+" "+props.options.option2}>{props.options.option2}</button>
            <button className={props.id+"-dropdown-item"} id="view-incomplete-dropdown-item" onClick={() => {
                if(props.id === "Delete") {
                    props.toggleModal();
                    props.updateCurrentDeleteOption(props.options.option3);
                } else {
                    let currButton = document.getElementById("view-incomplete-dropdown-item");
                    let completeButton = document.getElementById("view-complete-dropdown-item");
                    let allButton = document.getElementById("view-all-dropdown-item");
                    currButton.classList.add("selected-dropdown-item");
                    allButton.classList.remove("selected-dropdown-item");
                    completeButton.classList.remove("selected-dropdown-item");
                    props.deleteOrView(props.id, props.options.option3);
                }
                setDrop(!drop)
            }} onKeyDown={(e) => {
                if(e.key === "Tab"){
                    if(drop){
                        setDrop(!drop);
                    }
                }
            }
            } aria-label={props.id+" "+props.options.option3}>{props.options.option3}</button>
        </div>
    </div>;
}

export default DropdownButton;