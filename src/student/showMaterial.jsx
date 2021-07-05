import React, {useState} from 'react';


const Card = ({docObj, id}) => {
    const i = Math.floor(Math.random() * 5);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

   
    const openFile = () => {
        window.open(docObj.Link);
    }
    
    
    return (
        <div   class = "card-wrapper mr-5 " style ={{margin:10}}>
            <div class = "card-top" style={{"background-color": colors[i%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[i%5].secondaryColor, "border-radius": "10px"}}>{docObj.Name}</span>
                <div  style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                <i class = "fas fa-external-link-alt" style={{"color" : colors[i%5].primaryColor, "cursor" : "pointer",paddingRight : 1}} onClick = {openFile}></i>
                </div>
        </div>
        </div>
    );
};

export default Card;
