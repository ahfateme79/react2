import React from 'react';
import "./header.css";
import Navigation from '../navigation/navigation';

const Header = () => {
    return (
        <header id="home">
            <Navigation />
            <div className="wrapper">
                <div className="details">
                    <h2>lets take a shot</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    <button>learn more</button>
                </div>
            </div>
        </header>
    )
};



export default Header;