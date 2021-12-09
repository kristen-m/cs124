import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import firebase from "firebase/compat";

function LoginScreen(props) {
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
    const [
        signInWithEmailAndPassword,
        userCredential, loading, error
    ] = useSignInWithEmailAndPassword(props.auth);

    if (userCredential) {
        // Shouldn't happen because App should see that
        // we are signed in.
        return <div>Unexpectedly signed in already</div>
    } else if (loading) {
        return <p>Logging in…</p>
    }
    console.log(error);
    return (

    <div>
        {error && props.parseError(error.message)}
        <div id={"login-area"}>
            <form id={"login-form"}>
                <input type="text" id="login-email" name="email" placeholder={"Email"}></input><br></br>
                <input type="password" id="login-password" name="password" placeholder={"Password"}></input><br></br>
                <button id={"submit"} onClick={() => {
                    let email = document.getElementById("login-email").value;
                    props.auth.sendPasswordResetEmail(email)
                } }>Forgot Password?</button>
            </form>
            <label id={"toggle-password-vis"}>
                <input type="checkbox" onClick={() => {
                    let x = document.getElementById("login-password");
                    if (x.type === "password") {
                        x.type = "text";
                    } else {
                        x.type = "password";
                    }
                }}/> Show Password
            </label>
        </div>
        <button id={"login-button"} onClick={() => {
            let email = document.getElementById("login-email").value;
            let pwd = document.getElementById("login-password").value;
            signInWithEmailAndPassword(email, pwd);
        }}>Log In
        </button>
        <div id="or-text">——————————— or ———————————</div>
        <div>
            <div id='social-media-signin'>
                <div tabIndex={'1'} className="google-button" onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        // auth.signInWithPopup(googleProvider);
                        //fixing popup issue?
                        props.auth.signInWithPopup(googleProvider).then(function(result) {
                            // code which runs on success
                        }).catch(function(error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            console.log(errorCode);

                            var errorMessage = error.message;
                            console.log(errorMessage);
                        });
                    }
                }} onClick={() => {
                    props.auth.signInWithPopup(googleProvider).then(function(result) {
                        // code which runs on success
                    }).catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        console.log(errorCode);
                        // alert(errorCode);

                        var errorMessage = error.message;
                        console.log(errorMessage);
                        // alert(errorMessage);
                    });}}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon"
                             src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </div>
                    <div className="btn-text">Continue with Google</div>
                </div>

                <div tabIndex={'1'} className="facebook-button" onKeyDown={(e) => {
                    if(e.key === 'Enter'){
                        props.auth.signInWithPopup(facebookProvider).then(function(result) {
                            // code which runs on success
                        }).catch(function(error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            console.log(errorCode);
                            // alert(errorCode);

                            var errorMessage = error.message;
                            console.log(errorMessage);
                            // alert(errorMessage);
                        });
                    }
                }} onClick={() => {
                    props.auth.signInWithPopup(facebookProvider).then(function(result) {
                        // code which runs on success
                    }).catch(function(error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        console.log(errorCode);
                        // alert(errorCode);

                        var errorMessage = error.message;
                        console.log(errorMessage);
                        // alert(errorMessage);
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

export default LoginScreen;