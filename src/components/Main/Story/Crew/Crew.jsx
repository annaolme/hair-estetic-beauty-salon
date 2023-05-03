
import React from "react";
import s from "./Crew.module.css";

const CrewItem = (props) => {
    return (  

        <div className={s.photocard}>
            <img className={s.photoCrew} src={require(`../../../img/${props.photo}`)}/>
            <div className={s.infocard}>
                <h6>{props.name}  {props.lastname}</h6>
                <div className={s.linkblock}>
                    <a href='#'className={s.icon}><img src={require("../../../img/facebook.png")} /></a>
                    <a href='#'className={s.icon}><img src={require("../../../img/instagram.png")}/></a>
                    <a href='#'className={s.icon}><img src={require("../../../img/whatsapp.png")}/></a>
                </div>
            </div>
        </div>

        )
    }

const Crew = (props) =>{
   
    let CrewData = props.CrewPeople.map((item, i) => 
        <CrewItem name={item.name} lastname={item.lastname}  photo={item.photo} key={i}/> 
    )


    return(
        <div className={s.cardcrew}>
            {CrewData} 
        </div>    
    )
}

export default Crew;
