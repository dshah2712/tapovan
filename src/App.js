// import './App.css';
import { BrowserRouter as  Router,Route, Switch } from "react-router-dom";
import React, {useEffect, useState} from 'react';

// Admin Side
import Search from './Pages/UserList'
import Quiz from './components/Quiz';
import Materials from './upload/Materials';
import Lecture from './Pages/Lecture'
import Card from './Cards/Cards';

import Signup from './signUp';
//Dark light theme

// Student Side
import StudentCard from './student/Cards/studentCards'
import StudentLecture from './student/showLecture'
import StudentQuiz from './student/showQuiz'
import StudentMaterial from './student/Materials'
import StudentHome from './student'
import Admin from './admin'

import Login from './Login'

function App() {

  return (

    <Router>
    <Switch>
     {/* // Admin Side */}
      <Route exact path='/' component={Signup}/>
      {/* <Route exact path='/' component={Card}/> */}
      <Route exact path='/Admin' component={Admin}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/quiz' component={Quiz}/>
      <Route exact path='/materials' component={Materials}/>
      <Route exact path='/lecture' component={Lecture}/>


      <Route exact path='/home' component={StudentHome}/>
      <Route exact path='/studentmaterials' component={StudentMaterial}/>
      <Route exact path='/studentquiz' component={StudentQuiz}/>
      <Route exact path='/studentlecture' component={StudentLecture}/>


    </Switch>
  </Router>
  );
}

export default App;
