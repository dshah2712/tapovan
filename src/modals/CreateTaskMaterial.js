import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {app} from '../firebase'

const CreateTaskMaterial = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [date,setDate]= useState('');

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }
        else if(name==="date"){
            setDate(value)
        }
        else{
            setDescription(value)
        }
    }

    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["Date"] = date
        
        save(taskObj)
    }

    const onChange = (e) =>{
        const file=e.target.files[0];
        let storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
        // let uploadTask=storageRef.put(file)
        // uploadTask.on(fire.storage.TaskEvent.STATE_CHANGED,
        //     ()=>{
        //         let downloadUrl=uploadTask.snapshot.downloadUrl
        //     })
        fileRef.put(file).then(()=>{
            console.log("Uploaded a file")
        })
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Upload PDF</label>
                        <input type="file" className = "form-control" value = {description} onChange = {onChange} name = "description"/>
                    </div>
                    <div className = "form-group">
                        <label>Due Date</label>
                        <input type="date" className = "form-control" value = {date} onChange = {handleChange} name = "date"/>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskMaterial;