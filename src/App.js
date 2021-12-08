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

let toggleLogin = false;
let toggleSignUp = false;
const timeSavingTips = ["When selecting with the mouse, double-click to select a word!",
    "When selecting with the mouse, triple-click to select a line!",
    "Learn to touch type by mounting a touch typing chart near your computer!",
    "\"Learning is an investment: pay some immediate productivity for increased future productivity\" -Neil Rhodes",
    "Share a task list with friend so you can both edit tasks!",
    "Delete a task list by clicking the trash can icon.",
    "Sort tasks lists by priority by changing the Sort By menu.",
    "Skip the hassle of signing up with email by logging in with your existing Google or Facebook account."]

function App(props) {
    const [user, userLoading, userError] = useAuthState(auth);
    const [isLoginError, setLoginError] = useState("");


    function verifyEmail() {
        auth.currentUser.sendEmailVerification();
    }

    if (userLoading) {
        return <p>Checking...</p>;
    } else if (user) {
        return <div>
            <button tabIndex="1" type="button" onClick={() => auth.signOut()}>Logout: {user.displayName || user.email}</button>
            {!user.emailVerified && <button type="button" onClick={verifyEmail}>Verify email</button>}
            <SignedInApp {...props} user={user}/>

        </div>
    } else {
        return <div>
            {userError && <p>Error App: {userError.message}</p>}
            <div id={'header-wrapper'}>
                <button id={'header-login-button'} onClick={() => toggleView('login-area')}>Log In</button>
                <button id={'header-signup-button'} onClick={() => toggleView('signup-area')}>Sign Up</button>
            </div>
            <h2>Task List</h2>
            <div id="welcome-text">Welcome to Task List!<br/>Login or sign up to began making task lists .</div>
            <br/>
            <div id="sign-in-buttons">
                <SignIn key="Sign In"/>
                <SignUp key="Sign Up"/>
                <div id="or-text">——————————— or ———————————</div>
            </div>
            <div>
                <div id='social-media-signin'>
                    <div tabIndex={'1'} className="google-button" onKeyDown={(e) => {
                        if(e.key === 'Enter'){
                            // auth.signInWithPopup(googleProvider);
                            //fixing popup issue?
                            auth.signInWithPopup(googleProvider).then(function(result) {
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
                        auth.signInWithPopup(googleProvider).then(function(result) {
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
                            auth.signInWithPopup(facebookProvider).then(function(result) {
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
                        auth.signInWithPopup(facebookProvider).then(function(result) {
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
    }

    function showPassword() {
        let x = document.getElementById("login-password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    function toggleView(id) {
        document.getElementById('signup-area').style.display = 'none';
        document.getElementById('login-area').style.display = 'none';
        if(id === 'signup-area') {
            document.getElementById('sign-in-buttons').style.height = '800px';
            document.getElementById('login-button').style.display = 'none';
            document.getElementById('signup-button').style.display = 'none';
            document.getElementById('header-login-button').style.visibility = 'visible';
            document.getElementById('header-signup-button').style.visibility = 'hidden';
        } else if(id === 'login-area') {
            console.log(        "Toggled Login Area"
            )
            // if(isLoginError){
            //     return
            // } else {
                document.getElementById('login-button').style.display = 'grid';
                document.getElementById('login-button').style.margin = 'auto';
                document.getElementById('sign-in-buttons').style.height = '600px';
                document.getElementById('signup-button').style.display = 'none';
                document.getElementById('header-login-button').style.visibility = 'hidden';
                document.getElementById('header-signup-button').style.visibility = 'visible';
            // }
        }

        let elementDisplay = document.getElementById(id).style.display;
        if (!elementDisplay || elementDisplay === 'none') {
            document.getElementById(id).style.display = "grid";
        } else {
            document.getElementById(id).style.display = "none";
        }
    }

    function parseErrorMessage(error){
        if(error.includes('auth/invalid-email')){
            return <p id={'signin-error-message'}>Please Enter a Valid Email</p>;
        } else if (error.includes('auth/user-not-found')){
            return <p id={'signin-error-message'}>Hmm... we don't have you in our system. <br></br>
                <a href="#" onClick={() => toggleView("signup-area")}> Sign up </a> to create a new account.
                <br></br></p>;
        } else if (error.includes("auth/wrong-password")) {
            return <p>Incorrect Password, Try Again <br></br>
                <a href="#" onClick={() => {
               let email = document.getElementById("login-email").value;
               auth.sendPasswordResetEmail(email)
           } }> Forgot Your Password? </a></p>
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
            {isLoginError && parseErrorMessage(isLoginError)}
            <div id={"login-area"}>
                <form id={"login-form"}>
                    {/*<label htmlFor="email">email:</label><br></br>*/}
                    <input type="text" id="login-email" name="email" placeholder={"Email"}></input><br></br>
                    {/*<label htmlFor="password">password:</label><br></br>*/}
                    <input type="password" id="login-password" name="password" placeholder={"Password"}></input><br></br>
                    <button id={"submit"} onClick={() => {
                        let email = document.getElementById("login-email").value;
                        auth.sendPasswordResetEmail(email)
                    } }>Forgot Password?</button>
                </form>
                <label id={"toggle-password-vis"}>
                    <input type="checkbox" onClick={() => showPassword()}/> Show Password
                </label>
            </div>
            <button id={"login-button"} onClick={() => {
                if(!toggleLogin) {
                    toggleView('login-area');
                    toggleLogin = true;
                } else {
                    let email = document.getElementById("login-email").value;
                    let pwd = document.getElementById("login-password").value;
                    firebase.auth().signInWithEmailAndPassword(email, pwd).then(() => {toggleLogin = false;}).catch(function(error) {
                        // Handle Errors here.
                        let errorMessage = error.message;
                        // setLoginError(error.message);
                        console.log(error);
                    });
                }
            }}>Log In
            </button>
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
            <div id={"signup-area"}>
                <form id={"signup-form"} onSubmit={() => {
                    let email = document.getElementById("email").value;
                    createUserWithEmailAndPassword(email, password);
                }}>
                    {/*<label htmlFor="email">email:</label><br></br>*/}
                    <input type="text" id="email" name="email" placeholder={"Email"}></input><br></br>
                    {/*<label htmlFor="password">password:</label><br></br>*/}
                    <div id={'password-area'}>
                        <input type="password" id="password" placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />
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
                    {/*<label htmlFor="password">confirm password:</label><br></br>*/}
                    <input type="password" id="confirm-password" name="password" placeholder={"Password"} onChange={(e) => {
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
            <button id={"signup-button"} onClick={() => {
                if(!toggleSignUp) {
                    toggleView('signup-area');
                    toggleSignUp = true;
                } else {
                    toggleSignUp = false;
                }
            }}>Sign Up
            </button>
            {/*<div id={"signup-area"}>*/}
            {/*    <form id={"signup-form"} onSubmit={() => {*/}
            {/*            let email = document.getElementById("email").value;*/}
            {/*            createUserWithEmailAndPassword(email, password);*/}
            {/*    }}>*/}
            {/*        <label htmlFor="email">email:</label><br></br>*/}
            {/*        <input type="text" id="email" name="email"></input><br></br>*/}
            {/*        <label htmlFor="password">password:</label><br></br>*/}
            {/*        <div id={'password-area'}>*/}
            {/*        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />*/}
            {/*        <PasswordStrengthBar*/}
            {/*            password={password}*/}
            {/*            barColors={[*/}
            {/*                "#B83E26",*/}
            {/*                "#FFB829",*/}
            {/*                "#009200",*/}
            {/*                "#009200",*/}
            {/*                "#009200",*/}
            {/*                "#009200"*/}
            {/*            ]}*/}
            {/*            style={{ width: '100%',*/}
            {/*                      zoom: '400%'}}*/}
            {/*        />*/}
            {/*        </div>*/}
            {/*        <label htmlFor="password">confirm password:</label><br></br>*/}
            {/*        <input type="password" id="confirm-password" name="password" onChange={(e) => {*/}
            {/*            if(e.target.value === password) {*/}
            {/*                document.getElementById('signup-submit').disabled = false;*/}
            {/*            } else {*/}
            {/*                document.getElementById('signup-submit').disabled = true;*/}
            {/*            }*/}
            {/*        }*/}
            {/*        }>*/}
            {/*        </input><br></br>*/}
            {/*        <button id={"signup-submit"} disabled>Sign Up</button>*/}
            {/*    </form>*/}
            {/*</div>*/}
        </div>
    }
}

export default App;

