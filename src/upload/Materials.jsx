import React from 'react';
import UploadDoc from './uploadfile'
import './material.css';
import Card from './showupload';
import {db,storage} from '../firebase'
import {useEffect, useState} from 'react';

const Materials = () => {
    const [modal, setModal] = useState(false);
    const [pdfs, setDoc] = useState([])

    const toggle = () => {
        setModal(!modal);
    }
   
    useEffect(() => {
       getDoc();
          },[])
    
    function getDoc()
    {
        db.collection("docList").onSnapshot(function (querySnapshot){
            setDoc(
                querySnapshot.docs.map((doc) =>({
                id: doc.id,
                fileName : doc.data().fileName,
                Name : doc.data().Name,
                Link : doc.data().Link,
            
            }))
            );
            }); 
    }
    const saveDoc = (taskObj) => {
        db.collection("docList").add({
            fileName : taskObj.fileName,
            Name : taskObj.Name,
            Link : taskObj.Link,
        }).then(function() {
            window.location.reload();
            })
          
    }
    const deleteDoc = (fileName,id) => {
        if(window.confirm("Are you sure?"))
        {
          const storageRef = storage.ref(`Materials/${fileName}`);
          storageRef.delete().then(function() {
          db.collection("docList").doc(id).delete(); 
            })
        }} 
    
    

    return (  
        <>
        <div className = "header text-center">
        <h3>Materials</h3>
        <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Upload Material</button>
    </div>
    
    <div className = "task-container">
    {pdfs && pdfs.map((obj) => <Card docObj = {obj} id = {obj.id} deleteDoc = {deleteDoc} /> )}
    </div>
    <UploadDoc toggle = {toggle} modal = {modal} save ={saveDoc} />

   </>
    );
}
 
export default Materials; 