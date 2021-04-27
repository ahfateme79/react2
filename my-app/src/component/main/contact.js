import React from 'react';
import "./main.css";
import Inputs from './inputs';


const arr = [
    {
        type: "email",
        placeholder: "email"
    },
    {
        type: "password",
        placeholder: "password"
    }
]

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h6>Contact</h6>
            <div className="contact-body">
                <div className="info">
                    {
                        arr.map((n, index) => {
                            return <Inputs key={index} placeholder={n.placeholder} type={n.type} />
                        })
                    }
                </div>
                <textarea placeholder="Message"></textarea>
                <button>send message</button>
            </div>
        </div>
    )
}

export default Contact