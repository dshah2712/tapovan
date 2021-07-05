import React from "react";
import Card from './Cards/Cards';
import { useHistory } from 'react-router-dom';
import fire from "./firebase";
import Login from './Login'

//admin page edit here

const Admin = () => {
    function handleLogOut() {
        fire.auth().signOut();
        <Login/>
        console.log('hello')
      }
    return (
        <section className="hero">
        {/* //     <div>
        //         {history.push(`\admin`)}
        //     </div> */}
            <Card/>
            <nav>
                <button onClick={handleLogOut}>Logout</button>
            </nav>

        </section>
    );
};

export default Admin;
