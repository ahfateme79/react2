import React from 'react';
import "./main.css";

const Shots = (props) => {
    return (
        <div className="cart">
            <img src={props.src} alt="" />
            <span>{props.fulname}</span>
            <p>{props.dic}</p>
        </div>
    )

};


export default Shots;