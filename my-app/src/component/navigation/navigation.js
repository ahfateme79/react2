import React from 'react';
import "./navigation.css";
import Item from './items';

const items = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Gallery", href: "#gallery" },
    { title: "Contact", href: "#contact" },
];

const Navigation = () => {
    return (
        <nav>
            <h1>SHOT</h1>
            <ul className="navitem">
                {
                    items.map((n, index) => {
                        return <Item key={index} name={n.title} href={n.href} />;
                    })
                }
            </ul>
        </nav>
    )
};

export default Navigation