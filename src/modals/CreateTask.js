import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    
    // if(modal ==true)
    // {
    //     window.location.reload();
    // }
    useEffect(() => {
        setTaskName(null)
        setDescription(null)
        setDate(null)
    },[])

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }
        else if(name ==="date"){
            setDate(value)
        }
        else{
            setDescription(value)
        }
    }

    const handleSave = (e) => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["Date"] = date
        toggle();
        save(taskObj,e)       
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input  type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName" required/>
                    </div>
                    <div className = "form-group">
                        <label>Date</label>
                        <input  type="date" className = "form-control" value = {date} onChange = {handleChange} name = "date" required/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description" required></textarea>
                    </div>
            </ModalBody>
            <ModalFooter>
            <Button type = "submit"  color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;