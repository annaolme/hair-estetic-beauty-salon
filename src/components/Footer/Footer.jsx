import React from "react";
import s from "./Footer.module.css";
import {Routes, Route} from "react-router-dom";
import { NavLink } from "react-router-dom";
import AdminPage from "./AdminPage/AdminPage";

const Footer = () =>{
    return(
        <footer id='contacts' className={s.footer}>
            <div className={s.footwrapper}>
                <hr />
                <div className={s.contentfoot}>
                    <div className={s.info}>
                        <h3>Follow us</h3>
                        <div className={s.flexing}>
                            <a href='https://www.instagram.com/hairestetic.fi/'>
                                <img src={require("../img/instagram.png")} alt="" />
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=100086539039412'>
                                <img src={require("../img/facebook.png")} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={s.info}>
                        <h3>Opening hours</h3>
                            <span>Sun: closed</span>
                            <span>Mon-Fri: 9:00 am - 7:00 pm</span>
                            <span>Saturday: 10:00 am - 20:00 pm</span>
                    </div>
                    <div className={s.info}>
                        <h3>Contact information</h3>
                        <span>Address: Mannerhementie 100,00250 Helsinki</span>
                        <span>Phone: +358465755332</span>
                        <span>Email: hairestetic.fi@gmail.com</span>
                    </div>
                    <div className={s.info}>
                        <NavLink to="/admin_page">
                            <button>Admin page</button>
                        </NavLink>
                        <Routes>
                            <Route path="/admin_page" element={<AdminPage /> } />
                        </Routes> 
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;