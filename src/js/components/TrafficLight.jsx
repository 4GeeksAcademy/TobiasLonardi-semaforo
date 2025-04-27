import React from "react";
import { useState } from "react";




const TrafficLight = () =>{
    const [lightOn,setlightOn] = useState("");

    const changeLight = (color)=>{
        if(color!==lightOn)
            setlightOn(color);
        else{
            setlightOn("");
        }
    }

    const [showLight,setShowLight] = useState(false)

    return(
        <div className="trafficStop">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="trafficStopTop">

                </div>
                <div className={`trafficStopLight row col-12 d-flex flex-column justify-content-center align-items-center`}>
                    <div className={` lightBody redLight rounded-circle ${lightOn === "red" ? "light" : ""}`} onClick={()=>changeLight("red")}>

                    </div>
                    <div className={` lightBody yellowLight rounded-circle ${lightOn === "yellow" ? "light" : ""}`} onClick={() => changeLight("yellow")}>

                    </div>
                    <div className={` lightBody greenLight rounded-circle ${lightOn === "green" ? "light" : ""}`} onClick={() => changeLight("green")}>

                    </div>
                    {showLight &&<div className={` lightBody violetLight rounded-circle ${lightOn === "green" ? "light" : ""}`} onClick={() => changeLight("green")}>

                    </div>}
                    <button onClick={() => setShowLight(!showLight)}>
                        {showLight ? "show" : "hide"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TrafficLight;