import PasswordStrengthBar from "react-password-strength-bar";

function SignupArea() {
    return
    <div id={"signup-area"}>
        <form id={"signup-form"} onSubmit={() => {
            let email = document.getElementById("email").value;
            createUserWithEmailAndPassword(email, password);
        }}>
            <input type="text" id="email" name="email" placeholder={"Email"}></input><br></br>
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
}

export default SignupArea;