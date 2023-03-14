import React from "react";
import SectionME from "./SectionMe";
import SectionProject from "./SectionProject";
import SectionTecnologies from "./SectionTecnologies";
import SectionContactMe from "./SectionContactMe";

function  Main() {
    return(
        <div>
            <SectionME/>
            <SectionTecnologies/>
            <SectionProject/>
            <SectionContactMe/>
        </div>
    )
}

export default Main;