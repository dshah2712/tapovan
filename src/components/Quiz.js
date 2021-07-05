import React, {useEffect, useState} from 'react';
import { db } from '../firebase';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import Card1 from './Card1';
import './quiz.css';

const Quiz = () => {
    const [modal, setModal] = useState(false);
   // const [taskList, setTaskList] = useState([])
    const [ActiveList, setActiveList] = useState([])
    const [completedList, setCompletedList] = useState([])
    const [showActive,setShowActive] = useState(false)
    const [showCompleted,setShowCompleted] = useState(false)
    

    useEffect(() => {
        getActiveList();
        getCompletedList();
        
          },[])
    
    function getActiveList()
    {
        db.collection("activeList").onSnapshot(function (querySnapshot){
            setActiveList(
                querySnapshot.docs.map((doc) =>({
                id: doc.id,
                Name : doc.data().Name,
                Date : doc.data().Date,
                Description : doc.data().Description,
            
            }))
            );
            }); 
    }
    function getCompletedList()
    {
        db.collection("completedList").onSnapshot(function (querySnapshot){
            setCompletedList(
                querySnapshot.docs.map((doc) =>({
                id: doc.id,
                Name : doc.data().Name,
                Date : doc.data().Date,
                Description : doc.data().Description,
            
            }))
            );
            });   
    }

    const updateListArray = (obj, id) => {
        
        db.collection("activeList").doc(id).update({
            Name : obj.Name,
            Description : obj.Description,
            Date : obj.Date,
        });
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        db.collection("activeList").add({
            Name : taskObj.Name,
            Description : taskObj.Description,
            Date : taskObj.Date,
        }).then(function() {   
                window.location.reload();   
            })
           
        
       activeQuiz();
       // {<Results />}
    }
    const todayDate = () =>
    {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd
    }
   
    const deleteActive = (id) => {
       
                db.collection("activeList").doc(id).delete(); 
    }
    const deleteActiveIcon = (id) => {
      if(window.confirm("Are you sure?"))
      {
           
        db.collection("activeList").doc(id).delete(); 
      } 
     
    }
    
    const saveCompleted = (taskObj) => {
        db.collection("completedList").add({
            Name : taskObj.Name,
            Description : taskObj.Description,
            Date : taskObj.Date,
        });
    }
    const Results = (obj) => (
        
        <div id="results" className="task-container">
            {ActiveList && ActiveList.map((obj) => <Card taskObj = {obj} id = {obj.id} deleteActiveIcon = {deleteActiveIcon} updateListArray = {updateListArray} /> )}

        </div>
      )

    const Complete = () => (
        <div id="results" className="task-container">
            {completedList && completedList.map((obj) => <Card1 taskObj = {obj} id = {obj.id} deleteActiveIcon = {deleteActiveIcon} updateListArray = {updateListArray} /> )}
        </div>
      )

    const activeQuiz = () =>
    {
        // console.log(ActiveList);
        setShowActive(true);
        setShowCompleted(false);

        if(ActiveList !=null){

            for(let i=0; i<ActiveList.length;i++){

                if(ActiveList[i].Date < todayDate()){ 
                    saveCompleted(ActiveList[i])
                    deleteActive(ActiveList[i].id)  

                 }
                
            }
        }
    }
    const completedQuiz =() =>
    {
        setShowActive(false);
        setShowCompleted(true);
        if(ActiveList != null)
             {
                 for(let i=0;i<ActiveList.length;i++)
                 {  
                     if (ActiveList[i].Date < todayDate())
                     {
                        saveCompleted(ActiveList[i])
                        deleteActive(ActiveList[i].id)
                     }
                 }
             }
         
    }


    return (
        <>
            <div className = "header text-center">
                <h3>Quiz</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Quiz</button>
                
            </div>
            <input type="radio" value="Active" name="gender" onClick = {activeQuiz} /> Active 
           &nbsp;
            <input type="radio" value="Completed" onClick = {completedQuiz} name="gender"/> Completed
            <div className = "task-container">
            {/* {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )} */}
            {showActive ? <Results /> : null}
            {showCompleted ? <Complete /> : null}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>

           
        </>
    );
};

export default Quiz;