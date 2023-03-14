import React from "react";
import { Data } from "./SectionTecnologiesData";

function SectionTecnologies(){
    return(
        <section className="h-screen bg-slate-300 pt-20 flex ">{Data.map(data=> 
            <div className="h-96 w-60 p-4  bg-purple-200 flex flex-col">
            <div className="bg-red-200 h-2/3">
                <img src={data.img}></img>
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