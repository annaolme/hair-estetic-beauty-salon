import React from "react";
import s from'./Header.module.css';


const Header = () =>{
    return(
    <header id="home">
<div className={s.background}>
    <div className={s.container}>
        <div >
            <img className={s.logo} src={require("../img/logo3.png")} alt="" />
        </div>
        <div className={s.menu} id="mainnav">
            <ul>
                <li><a className={s.linkStyle} href="/#home">home</a></li>
                <li> <a className={s.linkStyle} href="/#story">our story</a></li>
                <li><a className={s.linkStyle} href="/#price">services and prices</a></li>
                <li><a className={s.linkStyle} href="/#contacts">contacts</a></li>
            </ul>
        </div>
    </div>
    <div className={s.topic}>
        <h3>Hairestetic</h3>
        <h5>Wonderful time in caring hands</h5>
    </div>
    </div>
    </header>
    )
}

export default Header;