import React from "react";
import SectionME from "./SectionMe";
import Slider from "./SectionProject";
import SectionProject from "./SectionProject";
import SectionTecnologies from "./SectionTecnologies";

function  Main() {
    return(
        <div>
            <SectionME/>
            <SectionTecnologies/>
            <Slider/>
        </div>
    )
}

export default Main;