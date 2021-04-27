import React from 'react';
import "./main.css";
import Firstsec from "./first-section";
import Secondsec from "./second-sec";
import Thirddsec from "./third-sec";
import Contact from './contact';



const Main = () => {
    return (
        <main>
            <Firstsec />
            <Secondsec />
            <Thirddsec />
            <Contact/>
        </main>
    )

};

export default Main;