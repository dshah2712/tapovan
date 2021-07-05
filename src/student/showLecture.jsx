import React, {useEffect, useState} from 'react';
import { db } from '../firebase';
import * as ReactBootStrap from 'react-bootstrap';

const Lecture= () => {
    const [LectureList, setLectureList] = useState([])
    

    useEffect(() => {
        getLectureList();
        activeLecture();
          },[])
    
    function getLectureList()
    {
        db.collection("LectureList").onSnapshot(function (querySnapshot){
            setLectureList(
                querySnapshot.docs.map((doc) =>({
                id: doc.id,
                Name : doc.data().Name,
                Time : doc.data().Time,
                Link : doc.data().Link,
                Date : doc.data().Date
            }))
            );
            }); 
}

    const todayDate = () =>
    {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        return yyyy + '-' + mm + '-' + dd
    }
   
    const deleteLecture = (id) => {
            db.collection("LectureList").doc(id).delete(); 
    }

    

    const activeLecture = () =>
    {
        if(LectureList !=null){

            for(let i=0; i<LectureList.length;i++){

                if(LectureList[i].Date < todayDate()){ 
                    deleteLecture(LectureList[i].id)  

                 } 
            }
        }
    }

    const renderLecture=(LectureList,index)=>{
            return(
            <tr key={index}>
                <td>{LectureList.Name}</td>
                <td>{LectureList.Time}</td>
                <td><a href={LectureList.Link}>{LectureList.Link}</a></td>
            </tr>
            );      
    }
    

    return (
        <>
            <div className = "header text-center">
                <h3>Today's Schedule ({todayDate()})</h3>           
            </div>

            <div className = "task-container">
                <ReactBootStrap.Table striped bordered hover height="50">
                    <thead>
                        <tr>
                            <th>Subject Name</th>
                            <th>Time</th>
                            <th>Lecture Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {LectureList!=0 && LectureList.map(renderLecture)}
                    </tbody>
                </ReactBootStrap.Table>              
            </div>

           
        </>
    );
};
export default Lecture;