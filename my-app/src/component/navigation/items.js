import React from 'react';
import "./navigation.css";


const Item = (props) => {
    return (
        <li><a href={props.href}>{props.name}</a></li>
    )
};

export default Item