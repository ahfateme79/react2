import React from 'react';
import "./main.css";
import Shots from "./shots";
import Four from '../img/4.jpg';
import Five from '../img/5.jpg';
import Six from '../img/6.jpg';

const shotitem = [
    {
        src: Four,
        fulname: 'goerge',
        dic: "Lorem Ipsum is simply dummy text of"
    },
    {
        src: Five,
        fulname: 'linda ,manager',
        dic: "Lorem Ipsum is simply dummy text of "
    },
    {
        src: Six,
        fulname: 'sandy ,director',
        dic: "Lorem Ipsum is simply dummy text of"
    }

];

const Secondsec = () => {
    return (
        <div className="shot">
            <div className="heading">
                <h4>shot team</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and type</p>
            </div>
            <div className="row">
                {
                    shotitem.map((t, index) => {
                       return <Shots key={index} src={t.src} fulname={t.fulname} dic={t.dic} />;
                    })
                }
            </div>
        </div>
    )
};


export default Secondsec;