import React from "react";

const TrafficLight = () =>{
    return(
        <div className="trafficStop">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="trafficStopTop">

                </div>
                <div className="trafficStopLight row col-12 d-flex flex-column justify-content-center align-items-center">
                    <div className="col-4 light redLight rounded-circle">

                    </div>
                    <div className="col-4 light yellowLight rounded-circle">

                    </div>
                    <div className="col-4 light greenLight rounded-circle">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrafficLight;