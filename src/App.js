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

function App(props) {
    const [user, userLoading, userError] = useAuthState(auth);

    function verifyEmail() {
        auth.currentUser.sendEmailVerification();
    }

    const FAKE_EMAIL = 'kristenmingl@gmail.com';
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
        return <>
            {userError && <p>Error App: {userError.message}</p>}
                <SignIn key="Sign In"/>
                <SignUp key="Sign Up"/>
        </>
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
                    <input type="text" id="email" name="email"></input><br></br>
                        <label htmlFor="password">password:</label><br></br>
                        <input type="password" id="password" name="password"></input><br></br>
                        <button id={"submit"} onClick={() => {
                            let email = document.getElementById("email").value;
                            let pwd = document.getElementById("password").value;
                            signInWithEmailAndPassword(email, pwd);
                        } }>Log In</button>
                </form>
                <label id={"toggle-password-vis"}>
                <input type="checkbox" onClick={() => showPassword()}/> Show Password
                </label>
            </div>
            {/*<button className={"login-button"} onClick={() =>*/}
            {/*    auth.signInWithPopup(googleProvider)}>Login with Google*/}
       <img id={"google-button"} src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png" onClick={() =>
           auth.signInWithPopup(googleProvider)}>
       </img>
            {/*</button>*/}
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
                Don't have an account? Sign Up
            </button>
            <div id={"signup-area"}>
                <form id={"signup-form"}>
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
                    <button id={"signup-submit"} onClick={() => {
                        let email = document.getElementById("email").value;
                        createUserWithEmailAndPassword(email, password);
                    }} disabled>Sign Up</button>
                </form>
            </div>
        </div>
    }
}

export default App;
