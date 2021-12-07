import {useEffect, useRef} from "react";


function EmailEntry(props) {
    const cancelButton = useRef(null);
    const sendButton = useRef(null);
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    useEffect(() => {
        document.getElementById('share-email-entry').focus();
        document.getElementById('share-email-entry').addEventListener("keydown", (e) => {
            if(e.key ===  "Tab") {
                e.preventDefault();
                cancelButton.current.focus()
            }
        })
        sendButton.current.addEventListener("keydown", (e) => {
            //Treat tab & shift+tab the same way bc only two options
            if(e.key === "Tab") {
                e.preventDefault();
                document.getElementById('share-email-entry').focus();
            }
        });
        const close = (e) => {
            if(e.key === "Escape"){
                props.setShareEmail(false);
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
                                <label id={"share-email"} htmlFor="email" tabIndex="0"> email: </label>
                                <input type="text" id="share-email-entry" name="email" tabIndex="0"
                                       onChange={(e) => {
                                    document.getElementById("share-button").disabled = !re.test(e.target.value);
                                }}
                                /><br></br>
                            </div>
                        </form>
                    </div>
                    <button ref={cancelButton} className={"alert-button alert-cancel"} type={"button"} aria-label="Cancel Share"
                            onClick={() => {props.setShareEmail(false)}}>
                        Cancel
                    </button>
                    <button ref={sendButton} id="share-button" className={"alert-button alert-ok"} type={"button"} aria-label="Confirm Share"
                            onClick={() => {
                                let email = document.getElementById("share-email-entry").value;
                                props.shareTaskList(email);
                                props.setShareEmail(false);
                                }
                            }>
                        Share
                    </button>
                </div>
            </div>
        </div>);
}

export default EmailEntry;