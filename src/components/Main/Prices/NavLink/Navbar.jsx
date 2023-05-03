import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavLink.module.css";


const Navbar = (props) =>{
    return(
    <div className={s.pricelinkblock}>
            <NavLink to="/hair" className={({isActive})=> isActive ? s.active:undefined}>
                <img className={s.iconprice} src={require("./img/hair-dryer.png")} alt="" />
                <h5>Hair</h5>
            </NavLink>
            <NavLink to="/hair_dye" className={({isActive})=> isActive ? s.active:undefined}>
                <img className={s.iconprice} src={require("./img/hair-dye.png")} alt="" />
                <h5>Hair dye</h5>
            </NavLink>
            <NavLink to="/nails" className={({isActive})=> isActive ? s.active:undefined}>
                <img className={s.iconprice} src={require("./img/nail-polish.png")} alt="" />
                <h5>Nails</h5>
            </NavLink>
            <NavLink to="/waxing" className={({isActive})=> isActive ? s.active:undefined}>
                <img className={s.iconprice} src={require("./img/wax3.png")} alt="" />
                <h5>Waxing</h5>
            </NavLink>
            <NavLink to="/eyes" className={({isActive})=> isActive ? s.active:undefined}>
                <img className={s.iconprice} src={require("./img/eyebrow.png")} alt="" />
                <h5>Eyes</h5>
            </NavLink>
            <NavLink to="/body_care" className={({isActive})=> isActive ? s.active:undefined}>
                <img className={s.iconprice} src={require("./img/cream.png")} alt="" />
                <h5>Body care</h5>
            </NavLink>
        </div>

    )
}

export default Navbar;


