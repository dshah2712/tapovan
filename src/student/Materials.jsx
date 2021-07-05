import React from 'react';
import '../upload/material.css';
import Card from './showMaterial';
import {db,storage} from '../firebase.js'
import {useEffect, useState} from 'react';

const Materials = () => {
    const [pdfs, setDoc] = useState([])

    
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
   
    
    

    return (  
        <>
        <div className = "header text-center">
        <h3>Materials</h3>
        </div>
    
    <div className = "task-container">
    {pdfs && pdfs.map((obj) => <Card docObj = {obj} id = {obj.id}/> )}
    </div>

   </>
    );
}
 
export default Materials; 