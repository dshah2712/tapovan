import React from "react";

import Card from './student/Cards/studentCards'
//student page edit here
import fire from "./firebase";
import Login from './Login'
import { useHistory } from 'react-router-dom';


const Student = () => {
    let history = useHistory();

    function handleLogOut() {
        fire.auth().signOut();
        <Login/>
        console.log('hello')
      }
    
    return (
        <section className="hero">
            {/* <div>
                {history.push('\home')}
            </div> */}
            <nav>
                <button onClick={handleLogOut}>Logout</button>
            </nav>
            <Card/>
            

        </section>
    );
};

export default Student;
