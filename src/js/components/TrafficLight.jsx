import React from "react";
import { useState } from "react";




const TrafficLight = () =>{
    const [lightOn,setlightOn] = useState("");

    const changeLight = (color)=>{
        setlightOn(color);
    }
    return(
        <div className="trafficStop">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="trafficStopTop">

                </div>
                <div className={`trafficStopLight row col-12 d-flex flex-column justify-content-center align-items-center`}>
                    <div className={`col-4 lightBody redLight rounded-circle ${lightOn === "red" ? "light" : ""}`} onClick={()=>changeLight("red")}>

                    </div>
                    <div className={`col-4 lightBody yellowLight rounded-circle ${lightOn === "yellow" ? "light" : ""}`} onClick={() => changeLight("yellow")}>

                    </div>
                    <div className={`col-4 lightBody greenLight rounded-circle ${lightOn === "green" ? "light" : ""}`} onClick={() => changeLight("green")}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrafficLight;