import React from "react";
import video from "../../assets/moon1.mp4"


function videoBG () {
    return(
    <div className="w-full h-full fixed z-0 ">
        <video className="w-full h-full object-cover" src={video} autoPlay loop muted />

    </div>
    )

}


export default videoBG