import React, { useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {storage} from '../firebase'
const UploadDoc = ({modal, toggle, save}) => {
    const [files, setFiles] = useState(null);
    const [materialName, setMaterialName] = useState('');
    
    const handleChange = (e) => {

        if(e.target.files[0])
        {
           setFiles(e.target.files[0])
        }
        }

        const handleName = (e) =>{
            const {name, value} = e.target
            if(name === "materialName"){
                setMaterialName(value)
            }
        
        }
       
    const uploadFile = () => {
        if(files == null)
        {
            window.alert("Select file")
        }
        else{
           
            const storageRef = storage.ref(`Materials/${files.name}`);
            const uploadTask = storageRef.put(files);
            uploadTask.on(
                "state_changed",snapshot => {},
                error => {
                    console.log(error);
                },
                () => {
                    storageRef.getDownloadURL().then(function(url) {
                    let taskObj = {}
                  
                    taskObj["Name"] = materialName
                    taskObj["fileName"] = files.name
                    taskObj["Link"] = url
                    save(taskObj)
                    // console.log(files.name)
                    // console.log(url)
                    // console.log(materialName)
    
                   })
                }
            )
             toggle();
        }
       
        }


    return (

        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Upload file</ModalHeader>
            <ModalBody>
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input  type="text" className = "form-control" value = {materialName} onChange = {handleName} name = "materialName" />
                    </div>
                   <div className = "form-group">
                        <input type="file" className = "form-control"   onChange = {handleChange} />
                   </div>    
            </ModalBody>
            <ModalFooter>
            <Button type = "submit"  color="primary" onClick={uploadFile}>Upload</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default UploadDoc;