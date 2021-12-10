import {useEffect, useRef} from "react";

function SMSPopup(props) {
    const cancelButton = useRef(null);
    const sendButton = useRef(null);
    useEffect(() => {
        sendButton.current.addEventListener("keydown", (e) => {
            //Treat tab & shift+tab the same way bc only two options
            if(e.key === "Tab") {
                e.preventDefault();
                document.getElementById('share-email-entry').focus();
            }
        });
        const close = (e) => {
            if(e.key === "Escape"){
                props.setShareSMS(false);
            }
        }
        window.addEventListener('keydown', close)
    });
    return (
        <div className={"alert-buttons"}>
            <div className={"backdrop"}>
                <div className="modal-share">
                    <div id={"sms-area"}>
                        <form id={"sms-form"}>
                            Sharing the list <span id={"task-title-in-share"}> {props.listName} </span>
                            <div>
                                <br></br>
                                <label id={"share-sms"} htmlFor="number" tabIndex="0"> Phone Number: </label>
                                <input type="text" id="share-sms-entry" name="number" tabIndex="0"/><br></br>
                            </div>
                        </form>
                    </div>
                    <button ref={cancelButton} className={"alert-button alert-cancel"} type={"button"} aria-label="Cancel Share"
                            onClick={() => {props.setShareSMS(false)}}>
                        Cancel
                    </button>
                    <button ref={sendButton} id="share-button" className={"alert-button alert-ok"} type={"button"} aria-label="Confirm Share"
                            onClick={() => {
                                let smsNum = document.getElementById("share-sms-entry").value;
                                props.sendSMS(smsNum);
                                props.setShareSMS(false);
                            }}>
                        Share
                    </button>
                </div>
            </div>
        </div>);
}
export default SMSPopup;