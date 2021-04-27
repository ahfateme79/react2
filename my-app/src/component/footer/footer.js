import React from 'react';
import "./footer.css";
import Icons from './icons'
import Eleven from '../img/11.svg';
import Twelve from '../img/12.svg';
import Thirteen from '../img/13.svg';
import Fourteen from '../img/14.svg';

const iconsrc=[Eleven,Twelve,Thirteen,Fourteen]
const Footer=()=>{
    return(
        <footer>
            <ul className="mediaicons">
                {
                    iconsrc.map((n, index)=>{
                      return  <Icons key={index} icon={n} />
                    })
                }
            </ul>
            <p>Copyright &copy;2021</p>
        </footer>
    )
}

export default Footer
