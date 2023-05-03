import React from "react";
import '../../../App.css';
import s from "./Story.module.css"
import Crew from "./Crew/Crew";


const Story = (props) =>{

    return(
       <div>
            <div id="story" className={s.storyblock}>
                <div className={s.whitebackgr}>
                    <div className={s.textstory}>
                        <h4>Our story</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error in eos repellat doloremque voluptatem sed optio officiis iure rem nam molestiae nisi, nesciunt eveniet dolorum corrupti saepe cumque, cum exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio placeat tempora temporibus nesciunt corporis accusamus sint architecto est. Tempore autem provident placeat molestias ratione officia quia fugit illum consequuntur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio placeat tempora temporibus nesciunt corporis accusamus sint architecto est. Tempore autem provident placeat molestias ratione officia quia fugit illum consequuntur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio placeat tempora temporibus nesciunt corporis accusamus sint architecto est. Tempore autem provident placeat molestias ratione officia quia fugit illum consequuntur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error in eos repellat doloremque voluptatem sed optio officiis iure rem nam molestiae nisi, nesciunt eveniet dolorum corrupti saepe cumque, cum exercitationem.</p>
                        
                    </div>
                </div>
            </div>
            <div id="" className={s.wrapper}>
                <h3>team experts</h3>
                <h5>Meet the crew that makes wonders happen</h5>
                <div className={s.crewwrapper}>
                    <Crew CrewPeople = {props.CrewPeople}/>
                </div>
            </div>
       </div>
    )
}



export default Story;