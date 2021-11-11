import {useEffect, useRef} from "react";


function Alert(props) {
    // const alertFocus = useRef(null);
    const cancelButton = useRef(null);
    const okButton = useRef(null);
    useEffect(() => {
        cancelButton.current.focus();
        cancelButton.current.addEventListener("keydown", (e) => {
            console.log("typed:"+ e.key +" while focused on cancel button");
            //Treat tab & shift+tab the same way bc only two options
            if(e.key ===  "Tab") {
                e.preventDefault();
                console.log("Pressed: "+e.key+" ... refocusing...");
                console.log(okButton.current);
                okButton.current.focus()
            }
        });
        okButton.current.addEventListener("keydown", (e) => {
            console.log("typed:"+ e.key +" while focused on ok button");
            //Treat tab & shift+tab the same way bc only two options
            if(e.key === "Tab") {
                e.preventDefault();
                console.log("Pressed: "+e.key+" ... refocusing...");
                console.log(cancelButton.current);
                cancelButton.current.focus();
            }
        });
        const close = (e) => {
            if(e.key === "Escape"){
                props.onClose()
            }
        }
        window.addEventListener('keydown', close)
    });
    return (
    <div className={"alert-buttons"}>
        <div className={"backdrop"}>
            <div className="modal">
                {props.children}
                <button ref={cancelButton} className={"alert-button alert-cancel"} type={"button"}
                        onClick={props.onClose}>
                    Cancel
                </button>
                <button ref={okButton} className={"alert-button alert-ok"} type={"button"}
                        onClick={() => {
                            props.onOK();
                            props.onClose();
                        }}>
                    OK
                </button>
            </div>
        </div>
    </div>);
}

export default Alert;