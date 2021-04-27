import React from 'react';
import "./main.css";
import three from '../img/3.jpg'
const Firstsec = () => {
    return (
        <div className="bg-se" id="about">
            <div className="bg-white">
                <h3>BACKGROUND</h3>
                <p>Quisque tempor bibendum dolor at volutpat. Suspendisse venenatis quam sed libero euismod feugiat. In cursus nisi vitae lectus facilisis mollis. Nullam scelerisque, quam nec iaculis vulputate.</p>
            </div>
            <figure>
                <img src={three} alt="" />
            </figure>
        </div>
    )
};

export default Firstsec;