import React from "react";
import s from "./Main.module.css";
import Divider from "./Devider/Devider";
import Prices from "./Prices/Prices";
import Story from "./Story/Story";


const Main = (props) =>{
    return(
        <div>
            <main>
            <Story CrewPeople = {props.CrewPeople}/>
            <Divider />
            <Prices HairPriceData={props.HairPriceData}
                    BodyCarePriceData={props.BodyCarePriceData}
                    EyesPriceData = {props.EyesPriceData}
                    DyeHairPriceData = {props.DyeHairPriceData} 
                    NailPriceData = {props.NailPriceData}
                    WaxPriceData = {props.WaxPriceData}
            />

            <a href="https://varaa.timma.fi/hairesteticbeauty" className={s.booking}>
                <button className={s.bookbtn}>Book your time</button>
            </a>
            
            </main>
        </div>
    )
}

export default Main;