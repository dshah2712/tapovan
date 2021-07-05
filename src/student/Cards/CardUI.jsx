import React from 'react';
import "./card-style.css";
import { useHistory } from 'react-router-dom';

const Card =props =>{
    let history = useHistory();

    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image 1" className="card-img-top" onClick={()=>{
                    history.push(`/${props.title}`)
                }}/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title.substring(7,props.title.length)}</h4>
            </div>
        </div>
    );
}

export default Card;