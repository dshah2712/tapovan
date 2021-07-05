import React, {useState} from 'react';


const Card = ({taskObj, id}) => {
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

    
    return (
        <div class = "card-wrapper mr-5 " style ={{margin:10,width:225,height:160}}>
            <div class = "card-top" style={{"background-color": colors[i%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[i%5].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
                {/* <p className = "mt-3">{taskObj.Description}</p> */}
                <a className = "mt-3" href={taskObj.Description}>Google form Link</a>
                <p className = "mt-3"><span>Date: </span>{taskObj.Date}</p>
               
        </div>
        </div>
    );
};

export default Card;
