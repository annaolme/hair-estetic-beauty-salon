import React from "react";
import '../../../App.css';


const Divider = () =>{
    return(
        <div className="divider">
            <div className="white-back">
                <h3> Welcome to Hairestetic</h3>
                <p>At Aesthetics Hair & Beauty we pride ourselves in providing an excellent level of service using top quality products. Our aim is to create a personalised program to care for the beauty of your hair and skin.</p>
                <p>We have chosen some of the top products in the market today to ensure your hair and skin receives the best care possible.</p>
                <p>We offer a full range of complimenting services and treatments, from Guinot Facials, massages to hair colouring & restyle.</p>
                <div className="booking">
                    <button className="whitebookbtn">Book your time</button>
                </div>
            </div>
        </div>
    )
}

export default Divider;