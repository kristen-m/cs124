import {useEffect, useRef} from "react";


function Alert(props) {
    const cancelButton = useRef(null);
    const okButton = useRef(null);
    useEffect(() => {
        cancelButton.current.focus();
        cancelButton.current.addEventListener("keydown", (e) => {
            //Treat tab & shift+tab the same way bc only two options
            if(e.key ===  "Tab") {
                e.preventDefault();
                okButton.current.focus()
            }
        });
        okButton.current.addEventListener("keydown", (e) => {
            //Treat tab & shift+tab the same way bc only two options
            if(e.key === "Tab") {
                e.preventDefault();
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