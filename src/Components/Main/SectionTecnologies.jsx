import React from "react";
import { Data } from "./SectionTecnologiesData";

function SectionTecnologies(){
    return(
        <section id="Tech" className="h-auto bg-slate-300 pt-20 flex flex-wrap justify-center items-center">{Data.map((data, index)=> 
            <div key={index} className="h-[450px] p-4  bg-purple-200 flex flex-col">
            <div className="bg-blue-200 h-2/3">
                <img src={data.img} className="bg-none h-full"></img>
            </div>
            <div className="bg-slate-200 flex justify-center">
            <h2>{data.name}</h2>
               
            </div>
        </div>
        )}
          
        </section>
        )
}

export default SectionTecnologies;