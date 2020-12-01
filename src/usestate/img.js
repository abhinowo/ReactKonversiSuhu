import React, { useState, useEffect } from "react";
import logo from "./11.jpg";
import "./image.css";
import App from "../App";

export default function Foto() {
    const [showImage, setShowImage] = useState(true);

    const hideImage = () => {
        setShowImage(!showImage);
    };

    // useEffect(() => {
    //     if (count > 0) {
    //         alert(`component will update & count ${count}`);
    //     }
    // }, [count]);
    

    return (
        <div className = "Main" >
        <p className ="Text" >IMAGE USESTATE XD</p>
        <p>Kelompok 43</p>
    
        <div className="ViewImage">
        <div classname="ViewImage1">
            <img
                className="App-logo"
                style={{display : showImage === true ? "flex" :"none"}}
                src={logo}
            />
        </div>
        <button className ="Button" onClick={hideImage}>
            {showImage !== true? "SHOW" : "HIDE"}
        </button>
        </div>

    </div >
    );

    
}


    
