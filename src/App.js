import './App.css';
import firebase from "firebase/compat";
import SignedInApp from "./SignedInApp";

import {
    useAuthState,
} from "react-firebase-hooks/auth";
import {useState} from "react";
import SignupScreen from "./SignupScreen";
import InitialScreen from "./InitialScreen";
import LoginScreen from "./LoginScreen";

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
function App(props) {
    const [user, userLoading, userError] = useAuthState(auth);
    const [currentScreenView, setCurrentScreenView] = useState("initial");


    function verifyEmail() {
        auth.currentUser.sendEmailVerification();
    }

    if (userLoading) {
        return <p>Checking...</p>;
    } else if (user) {
        return <div>
            <button tabIndex="1" type="button" onClick={() => {
                auth.signOut();
                setCurrentScreenView("initial");
            }}>Logout: {user.displayName || user.email}</button>
            {!user.emailVerified && <button type="button" onClick={verifyEmail}>Verify email</button>}
            <SignedInApp {...props} user={user}/>

        </div>
    } else {
        console.log(currentScreenView);
        return <div>
            {userError && <p>Error App: {userError.message}</p>}
            <div id={'header-wrapper'}>
                <button id={'header-login-button'} onClick={() => setCurrentScreenView("login")}>Log In</button>
                <button id={'header-signup-button'} onClick={() => setCurrentScreenView("signup")}>Sign Up</button>
            </div>
            <h2>Task List</h2>
            <div id="welcome-text">Welcome to Task List!<br/>Login or sign up to began making task lists .</div>
            <br/>
            <div id="sign-in-buttons">
                {currentScreenView === "initial" && <InitialScreen setCurrentScreen={setCurrentScreenView}/>}
                {currentScreenView === "login" && <LoginScreen auth={auth} parseError={parseErrorMessage}/>}
                {currentScreenView === "signup" && <SignupScreen auth={auth} parseError={parseErrorMessage}/>}
            </div>
        </div>
    }

    function parseErrorMessage(error){
        if(error.includes('auth/invalid-email')){
            return <p id={'signin-error-message'}>Please Enter a Valid Email</p>;
        } else if (error.includes('auth/user-not-found')){
            return <p id={'signin-error-message'}>Hmm... we don't have you in our system. <br></br>
                <a href="#" onClick={() => setCurrentScreenView('signup')}> Sign up </a> to create a new account.
                <br></br></p>;
        } else if (error.includes("auth/wrong-password")) {
            return <p>Incorrect Password, Try Again <br></br>
                <a href="#" onClick={() => {
               let email = document.getElementById("login-email").value;
               auth.sendPasswordResetEmail(email)
           } }> Forgot Your Password? </a></p>
        }
    }
}

export default App;

