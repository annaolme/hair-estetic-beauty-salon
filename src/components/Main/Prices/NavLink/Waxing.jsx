import React from "react";
import s from "./Component.module.css";

const PriceItem = (props) => {
    return (
        <div className={s.priceblock}>
            <div className={s.firstline}>
                <span className={s.topname}>{props.name}</span>
                <div className={s.downline}></div>
                <div className={s.priceamount}>{props.price}</div>
            </div>
            <span className={s.expl}>{props.description}</span>
        </div>
    )
}

const Waxing = (props) =>{
 
    let WaxPriceItems = props.WaxPriceData.map((item, i) => 
        <PriceItem name={item.name} id={item.id} price={item.price} description={item.description} key={i}/> 
    )


    return(
        <div className={s.gridprice}>
            {WaxPriceItems}
            
        </div>
    )
}

export default Waxing;


