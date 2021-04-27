import React from 'react';
import "./main.css";


const Gallery = (props) => {
    return (
        <div className="gallery-box" id="gallery">
            <div className="more">
                <div>
                    <span>ALIQUAMERAT</span>
                    <p>Quisque tempor bibendum dolor at volutpat. Suspendisse venenati</p>
                </div>
                <button>Details</button>
            </div>
            <img src={props.img} alt="" />

        </div>
    )
}

export default Gallery
