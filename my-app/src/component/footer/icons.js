import React from 'react';
import './footer.css';

const Icons = (props) => {
    return (
        <li><a href="#"><img src={props.icon} alt=""/></a></li>
    )
};


export default Icons;