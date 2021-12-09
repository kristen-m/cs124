import firebase from "firebase/compat";

function InitialScreen(props) {
    const timeSavingTips = ["When selecting with the mouse, double-click to select a word!",
        "When selecting with the mouse, triple-click to select a line!",
        "Learn to touch type by mounting a touch typing chart near your computer!",
        "\"Learning is an investment: pay some immediate productivity for increased future productivity\" -Neil Rhodes",
        "Share a task list with friend so you can both edit tasks!",
        "Delete a task list by clicking the trash can icon.",
        "Sort tasks lists by priority by changing the Sort By menu.",
        "Skip the hassle of signing up with email by logging in with your existing Google or Facebook account."]

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const auth = firebase.auth();
    return(
        <div>
            <button id={"login-button"} onClick={() => {
                props.setCurrentScreen("login");
            }}>Log In
            </button>
            <button id={"signup-button"} onClick={() => {
                props.setCurrentScreen("signup");
            }}>Sign Up
            </button>
            <div id="or-text">——————————— or ———————————</div>
            <div>
                <div id='social-media-signin'>
                    <div tabIndex={'1'} className="google-button" onKeyDown={(e) => {
                        if(e.key === 'Enter'){
                            auth.signInWithPopup(googleProvider).then(function(result) {
                            }).catch(function(error) {
                                var errorCode = error.code;
                                console.log(errorCode);
                                var errorMessage = error.message;
                                console.log(errorMessage);
                            });
                        }
                    }} onClick={() => {
                        auth.signInWithPopup(googleProvider).then(function(result) {
                        }).catch(function(error) {
                            var errorCode = error.code;
                            console.log(errorCode);
                            var errorMessage = error.message;
                            console.log(errorMessage);
                        });}}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon"
                                 src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                        </div>
                        <div className="btn-text">Continue with Google</div>
                    </div>

                    <div tabIndex={'1'} className="facebook-button" onKeyDown={(e) => {
                        if(e.key === 'Enter'){
                            auth.signInWithPopup(facebookProvider).then(function(result) {
                            }).catch(function(error) {
                                var errorCode = error.code;
                                console.log(errorCode);
                                var errorMessage = error.message;
                                console.log(errorMessage);
                            });
                        }
                    }} onClick={() => {
                        auth.signInWithPopup(facebookProvider).then(function(result) {
                        }).catch(function(error) {
                            var errorCode = error.code;
                            console.log(errorCode);
                            var errorMessage = error.message;
                            console.log(errorMessage);
                        });}}>
                        <div className="facebook-icon-wrapper">
                            <img className="facebook-icon"
                                 src="https://upload.wikimedia.org/wikipedia/commons/9/91/036-facebook.png"/>
                        </div>
                        <div className="btn-text">Continue with Facebook</div>
                    </div>
                </div>
                <div id="tips-wrapper">
                    <div id="time-saving-tips-title">Time Saving Tip!</div>
                    <div id="time-saving-tips-body">
                        {timeSavingTips[Math.floor(Math.random()*timeSavingTips.length)]}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InitialScreen;