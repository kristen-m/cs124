import './App.css';
import firebase from "firebase/compat";
import SignedInApp from "./SignedInApp";
import PasswordStrengthBar from 'react-password-strength-bar';

import {
    useAuthState,
    useCreateUserWithEmailAndPassword,
    useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import {useState} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyDoJ20jLJgywuuBGKRGlcUQNH0abdUQ_Pw",
    authDomain: "task-list-91e71.firebaseapp.com",
    projectId: "task-list-91e71",
    storageBucket: "task-list-91e71.appspot.com",
    messagingSenderId: "786170287003",
    appId: "1:786170287003:web:00ac302dcd21562873073e",
    measurementId: "G-SS8R968F1Z"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();


const timeSavingTips = ["When selecting with the mouse, double-click to select a word!",
    "When selecting with the mouse, triple-click to select a line!",
    "Learn to touch type by mounting a touch typing chart near your computer!",
    "\"Learning is an investment: pay some immediate productivity for increased future productivity\" -Neil Rhodes"]

function App(props) {
    const [user, userLoading, userError] = useAuthState(auth);

    function verifyEmail() {
        auth.currentUser.sendEmailVerification();
    }

    const FAKE_EMAIL = 'hiwapek644@suggerin.com';
    const FAKE_PASSWORD = 'xyzzyxx';

    if (userLoading) {
        return <p>Checking...</p>;
    } else if (user) {
        return <div>
            {user.displayName || user.email}
            <SignedInApp {...props} user={user}/>
                    <button type="button" onClick={() => auth.signOut()}>Logout</button>
                    {!user.emailVerified && <button type="button" onClick={verifyEmail}>Verify email</button>}
        </div>
    } else {
        return <div>
            {userError && <p>Error App: {userError.message}</p>}
            <h2>Task List</h2>
            <div id="welcome-text">Welcome to Task List!<br/>Login or sign up to began making task lists .</div>
            {/*<div id="welcome-text">Login or sign up to began making task lists.</div>*/}
            <br/>
            <div id="sign-in-buttons">
                <SignIn key="Sign In"/>
                <SignUp key="Sign Up"/>
                <div id="or-text">——————————— or ———————————</div>
            </div>
            <div id="welcome-text">Time Saving Tip!</div>
            <div>
                <div id='social-media-signin'>
                    <div className="google-button" onClick={() =>
                        auth.signInWithPopup(googleProvider)}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon"
                                 src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                        </div>
                        <div className="btn-text">Continue with Google</div>
                    </div>

                    <div className="facebook-button" onClick={() =>
                        auth.signInWithPopup(facebookProvider)}>
                        <div className="facebook-icon-wrapper">
                            <img className="facebook-icon"
                                 src="https://upload.wikimedia.org/wikipedia/commons/9/91/036-facebook.png"/>
                        </div>
                        <div className="btn-text">Continue with Facebook</div>
                    </div>
                </div>
            </div>
        </div>
    }

    function showPassword() {
        let x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    function toggleView(id) {
        document.getElementById('signup-area').style.display = 'none';
        document.getElementById('login-area').style.display = 'none';

        let elementDisplay = document.getElementById(id).style.display;
        if (!elementDisplay || elementDisplay === 'none') {
            document.getElementById(id).style.display = "grid";
        } else {
            document.getElementById(id).style.display = "none";
        }
    }

    function SignIn() {
        const [
            signInWithEmailAndPassword,
            userCredential, loading, error
        ] = useSignInWithEmailAndPassword(auth);

        if (userCredential) {
            // Shouldn't happen because App should see that
            // we are signed in.
            return <div>Unexpectedly signed in already</div>
        } else if (loading) {
            return <p>Logging in…</p>
        }
        return <div>
            {error && <p>"Error logging in: " {error.message}</p>}
            <button className={"login-button"} onClick={() => toggleView('login-area')}>Login
            </button>
            <div id={"login-area"}>
                <form id={"login-form"}>
                    <label htmlFor="email">email:</label><br></br>
                    <input type="text" id="login-email" name="email"></input><br></br>
                        <label htmlFor="password">password:</label><br></br>
                        <input type="password" id="login-password" name="password"></input><br></br>
                        <button id={"submit"} onClick={() => {
                            let email = document.getElementById("login-email").value;
                            let pwd = document.getElementById("login-password").value;
                            signInWithEmailAndPassword(email, pwd);
                        } }>Log In</button>
                </form>
                <label id={"toggle-password-vis"}>
                <input type="checkbox" onClick={() => showPassword()}/> Show Password
                </label>
            </div>
            {/*<button className={"login-button"} onClick={() =>*/}
            {/*    auth.signInWithPopup(googleProvider)}>Login with Google*/}
       {/*/!*<img id={"google-button"} src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png" onClick={() =>*!/*/}
       {/*    auth.signInWithPopup(googleProvider)}>*/}
       {/*</img>*/}
        </div>
    }

    function SignUp() {
        const [
            createUserWithEmailAndPassword,
            userCredential, loading, error
        ] = useCreateUserWithEmailAndPassword(auth);
        const [password, setPassword] = useState("");

        if (userCredential) {
            // Shouldn't happen because App should see that
            // we are signed in.
            return <div>Unexpectedly signed in already</div>
        } else if (loading) {
            return <p>Signing up…</p>
        }
        return <div>
            {error && <p>"Error signing up: " {error.message}</p>}
            <button className={"login-button"} onClick={() => toggleView('signup-area')}>
                Sign Up
            </button>
            <div id={"signup-area"}>
                <form id={"signup-form"} onSubmit={() => {
                        let email = document.getElementById("email").value;
                        createUserWithEmailAndPassword(email, password);
                }}>
                    <label htmlFor="email">email:</label><br></br>
                    <input type="text" id="email" name="email"></input><br></br>
                    <label htmlFor="password">password:</label><br></br>
                    <div id={'password-area'}>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    <PasswordStrengthBar
                        password={password}
                        barColors={[
                            "#B83E26",
                            "#FFB829",
                            "#009200",
                            "#009200",
                            "#009200",
                            "#009200"
                        ]}
                        style={{ width: '100%',
                                  zoom: '400%'}}
                    />
                    </div>
                    <label htmlFor="password">confirm password:</label><br></br>
                    <input type="password" id="confirm-password" name="password" onChange={(e) => {
                        if(e.target.value === password) {
                            document.getElementById('signup-submit').disabled = false;
                        } else {
                            document.getElementById('signup-submit').disabled = true;
                        }
                    }
                    }>
                    </input><br></br>
                    <button id={"signup-submit"} disabled>Sign Up</button>
                </form>
            </div>
        </div>
    }
}

export default App;
