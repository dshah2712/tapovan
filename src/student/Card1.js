import React, {useState} from 'react';
import './quiz.css';

const Card1 = ({taskObj, id}) => {
    const i = Math.floor(Math.random() * 5);

    const colors = [
        {
            primaryColor : "#00FF00",
            secondaryColor : "#ECF3FC"
        }
       
    ]

    
    return (
        <div class = "card-wrapper mr-5 " style ={{margin:10}}>
            <div class = "card-top" style={{"background-color": colors[0].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[0].secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">Quiz has ended</p>
                <p className = "mt-3"><span>Due Date: </span>{taskObj.Date}</p>           
        </div>
        </div>
    );
};

export default Card1;
