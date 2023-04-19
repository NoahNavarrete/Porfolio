import React from "react";
import { Data } from "./SectionTecnologiesData";
import cloud from "../../assets/cloud.png"

function SectionTecnologies(){
    return(

        <section id="Tech" className="box-border font-serif h-auto pt-20 flex flex-wrap justify-center items-center cursor-default ">
            <h2 className="flex text-4xl sm:text-5xl transition-all duration-700  shadow-sm hover:scale-125 border-4 border-[#f0f0ff] rounded-lg p-2 bg-[#0e0e58] text-white" >Technologies</h2>
            <div className="flex flex-wrap justify-center items-center ">

            {Data.map((data, index)=> 
            <div key={index} className="h-[450px] transition-all duration-1000 p-4 flex flex-col hover:-translate-y-4">
            <div className="bg-blue-200 flex flex-wrap shadow-2xl shadow-black border-x-8 border-t-8 hover:bg-blue-300 rounded-tr-2xl rounded-tl-2xl h-2/3 show border-sky-300 ">
                <img src={data.img} className="bg-none h-full transition-all duration-700 hover:-translate-y-4 hover:scale-[1.1] shodow-4 shadow-slate-800"></img>
            </div>
            <div className="bg-slate-200 border-b-8 border-x-8 border-sky-300 flex justify-center rounded-br-2xl rounded-bl-2xl">
            <h2>{data.name}</h2>
               
            </div>
            
        </div>

)}
</div>
  <div className="box-border w-screen h-20 sm:h-48 flex justify-between">
                <img className="h-50 transition-all duration-500 hover:scale-125" src={cloud} alt="cloud" />
                <img className="h-50 transition-all duration-500 hover:scale-125"src={cloud} alt="cloud" />
                <img className="h-50 transition-all duration-500 hover:scale-125" src={cloud} alt="cloud" />
                <img className="h-50 transition-all duration-500 hover:scale-125" src={cloud} alt="cloud" />
                <img className="h-50 transition-all duration-500 hover:scale-125" src={cloud} alt="cloud" />
            </div>
          
        </section>
        )
}

export default SectionTecnologies;