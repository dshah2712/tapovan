import React, { useState, useEffect } from "react";
import Login from "./Login";
import fire from "./firebase";
import "./index.css";
import Student from "./student";
import Admin from "./admin"


var errcheck = 0;
var role1 = "";
const SignUp = () => {


  var db = fire.firestore();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  async function advancedLogin(email) {

    await db.collection("Users").doc(email)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          role1 = doc.data().role;
          console.log("inside advanced", role1);

        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function (error) {
        console.log("Error getting document:", error);
      });

  }

  const handleLogin = async () => {

    clearErrors();
    role1 = "";
    
    if (email != "" && password != "") {
        
        advancedLogin(email);
        
      }
    await fire
      .auth()
      .signInWithEmailAndPassword(email, password)

      .catch((err) => {

        switch (err.code) {
          case "auth/invalid-email":

          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:

        }
      });
    
  };

  function start() {
    errcheck = 1;

  }

  const handleSignup = async () => {
    errcheck = 0;

    clearErrors();
    await fire



      .auth()
      .createUserWithEmailAndPassword(email, password)

      .catch((err) => {

        start();
        console.log("inside catch")
        switch (err.code) {
          case "auth/email-already-in-use":

          case "auth/invalid-email":
            setEmailError(err.message);

            break;
          case "auth/weak-password":
            setPasswordError(err.message);

            break;
          default:
            start();
        }
      });
    // advancedLogin(email);
    role1 = role;
    console.log(role1)

    if (errcheck == 0) {

      db.collection("Users").doc(email).set(
        {
          name: name,
          surname: surname,
          number: number,
          email: email,
          role: role,
        })

        .then(() => {


        })
        .catch((error) => {
          alert(error.message);

        });

    }




    // set all field null for next response(after uploading the first one)
    setName("");
    setEmail("");
    setSurname("");
    setNumber("");
    setRole("");
    setError("");
  };
  
  function handleLogOut() {
    fire.auth().signOut();
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      clearInputs();
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  function authenticate() {
    // if(role1 == "Admin")
    if (role1 == "Student") {
      return (<Student />)
    } else if (role1 == "Admin") {
      return (<Admin  />)
    }
  }

  return (
    <div className="App">
      {user ? (
        authenticate()

      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          name={name}
          surname={surname}
          number={number}
          role={role}
          setName={setName}
          setSurname={setSurname}
          setNumber={setNumber}
          setRole={setRole}
          setError={setError}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          clearInputs={clearInputs}
        />


      )}


    </div>

  );


};

export default SignUp;