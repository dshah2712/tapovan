import React, { useState } from "react";
import "./lg.css";

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        name,
        setName,
        surname,
        setSurname,
        number,
        setNumber,
        role,
        setRole,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;



    const [selected, setSelected] = useState("Faculty");

    return (
        <section className="login">
            <div className="loginContainer">
                {hasAccount ?
                    <p class="text1">Sign In</p> :
                    <p class="text">Sign Up</p>
                }
                {!hasAccount ?
                    (<div><label>Name</label>
                        <input
                            type="text"
                            required
                            autoFocus
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        /></div>) : <div />
                }
                {!hasAccount ?
                    (<div><label>Surname</label>
                        <input
                            type="text"
                            required
                            autoFocus
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        /></div>) : <div />
                }
                {!hasAccount ?
                    (<div><label>Phone Number</label>
                        <input
                            type="text"
                            required
                            autoFocus
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        /></div>) : <div />
                }
                 {!hasAccount ?
                    (<div><label>Role</label>
                       <select value={role} className="select" onChange={(e) => setRole(e.target.value)}>
                       <option></option>
                    <option value="Student">Student</option>
                    <option value="Admin">Admin</option>

                </select></div>) : <div />
                }
                <label>Email</label>
                <input
                    type="text"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                
                {/* <input
                    type="text"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /> */

                }
                {/* <label className="label">College</label> */}
               
                <div className="btnContainer">

                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign In</button>

                            <p>
                                Don't have a account?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>

                            </p>

                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>
                                Have and account ?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                            </p>

                        </>
                    )}

                </div>
            </div>
        </section>
    );
};

export default Login;
