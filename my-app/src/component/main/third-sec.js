import React from 'react';
import "./main.css";
import Gallery from './gallery';
import Seven from '../img/7.jpg';
import Eight from '../img/8.jpg';
import Nine from '../img/9.jpg';
import Ten from '../img/10.jpg';

const source = [Seven, Eight, Nine, Ten]

const Thirddsec = () => {
    return (
        <div className="gallery">
            <div className="gallery-head">
                <h5>Gallery</h5>
                <p>Quisque tempor bibendum dolor at volutpat. Suspendisse venenatis quam sed libero</p>
            </div>
            <div className="gallery-content">
                {
                    source.map((n,index)=>{
                      return  <Gallery key={index} img={n} />
                    })
                }
            </div>
        </div>
    )
}
export default Thirddsec