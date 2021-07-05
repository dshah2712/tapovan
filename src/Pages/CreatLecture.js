import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateLecturePopup = ({modal, toggle, save}) => {
    const [subjectName, setSubjectName] = useState('');
    const [link, setLink] = useState('');
    const [time, setTime] = useState('');
    
    
    useEffect(() => {
        setSubjectName(null)
        setLink(null)
        setTime(null)
    },[])

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "subjectName"){
            setSubjectName(value)
        }
        else if(name ==="time"){
            setTime(value)
        }
        else{
            setLink(value)
        }
    }

    const handleSave = (e) => {
        let taskObj = {}
        taskObj["Name"] = subjectName
        taskObj["Link"] = link
        taskObj["Time"] = time
        toggle();
        save(taskObj,e)       
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Lecture</ModalHeader>
            <ModalBody>
                    <div className = "form-group">
                        <label>Subject Name</label>
                        <input  type="text" className = "form-control" value = {subjectName} onChange = {handleChange} name = "subjectName" required/>
                    </div>
                    <div className = "form-group">
                        <label>Time</label>
                        <input  type="text" className = "form-control" value = {time} onChange = {handleChange} name = "time" required/>
                    </div>
                    <div className = "form-group">
                        <label>Zoom meeting Link</label>
                        <input  type="text" className = "form-control" value = {link} onChange = {handleChange} name = "link" required/>
                    </div>
            </ModalBody>
            <ModalFooter>
            <Button type = "submit"  color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateLecturePopup;