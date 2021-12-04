import {useEffect, useRef} from "react";


function EmailEntry(props) {
    const cancelButton = useRef(null);
    const sendButton = useRef(null);
    useEffect(() => {
        cancelButton.current.focus();
        cancelButton.current.addEventListener("keydown", (e) => {
            //Treat tab & shift+tab the same way bc only two options
            if(e.key ===  "Tab") {
                e.preventDefault();
                sendButton.current.focus()
            }
        });
        sendButton.current.addEventListener("keydown", (e) => {
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
                <div className="modal-share">
                    <div id={"share-area"}>
                        <form id={"share-form"}>
                            Sharing the list <span id={"task-title-in-share"}> {props.listName} </span>
                            <div>
                                <br></br>
                                <label id={"share-email"} htmlFor="email"> email: </label>
                                <input type="text" id="share-email-entry" name="email"></input><br></br>
                            </div>
                        </form>
                    </div>
                    <button ref={cancelButton} className={"alert-button alert-cancel"} type={"button"} aria-label="Cancel Delete"
                            onClick={() => {props.setShareEmail(false)}}>
                        Cancel
                    </button>
                    <button ref={sendButton} className={"alert-button alert-ok"} type={"button"} aria-label="Confirm Delete"
                            onClick={() => {
                                let email = document.getElementById("email").value;
                                props.shareTaskList(email);
                                props.setShareEmail(false);
                            }}>
                        Share
                    </button>
                </div>
            </div>
        </div>);
}

export default EmailEntry;