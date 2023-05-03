import React from "react";
import s from'./Prices.module.css';
import Hair from "./NavLink/Hair";
import Navbar from "./NavLink/Navbar";
import Nails from "./NavLink/Nails";
import {Routes, Route} from "react-router-dom";
import Eyes from "./NavLink/Eyes";
import Waxing from "./NavLink/Waxing";
import BodyCare from "./NavLink/BodyCare";
import HairDye from "./NavLink/HairDye";



const Prices = (props) =>{
    
  
    return(
        <div className={s.pricewrapper}>
            <h3 id="price" className={s.h3price}>Hinnasto</h3>
            <Navbar />
                <Routes>
                    <Route path="/hair" element={<Hair HairPriceData={props.HairPriceData}/> } />
                    <Route path="/hair_dye" element={<HairDye DyeHairPriceData = {props.DyeHairPriceData}/>}/>
                    <Route path="/nails" element={<Nails NailPriceData = {props.NailPriceData}/>}/>
                    <Route path="/eyes" element={<Eyes EyesPriceData = {props.EyesPriceData}/>}/>
                    <Route path="/waxing" element={<Waxing WaxPriceData = {props.WaxPriceData}/>}/>
                    <Route path="/body_care" element={<BodyCare BodyCarePriceData={props.BodyCarePriceData}/>}/>
                </Routes>               
        </div>

    )
}

export default Prices;