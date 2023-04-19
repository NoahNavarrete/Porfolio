import React from "react";
import Me from "./Img/Me.png";
import cloud from "../../assets/cloud.png"

function SectionMe() {
    return(
        <div id="About" className="flex flex-wrap box-border min-h-screen sm:gap-20 justify-center items-center pt-2 w-screen">
            
            <div className="w-full flex justify-between ">
                <img src={cloud} className="h-20 sm:h-48" alt="" />
                <p className="flex text-5xl transition-all duration-700  shadow-sm hover:scale-125 border-4 bg-[#0e0e58] border-[#f0f0ff] rounded-lg mt-28 sm:text-6xl text-white">About</p>
                <img src={cloud} className="h-20 sm:h-48" alt="" />
            </div>
           <img src={Me} alt="Me" className="hover:scale-125 hover:rotate-3  min-h-[100px] " />



           <div className=" h-auto max-w-3xl p-5 mb-20 mt-3 sm:pt-48 box-border border-8 text-white hover:rotate-3 border-[#f0f0ff] rounded-3xl">
            <div className="mb-10 ">
            <h1 className="pb-2">Hi, I´m Noé Navarrete</h1>
            <h2>Web Developer</h2>

            </div>
            <p>I'm from Buenos Aires, Argentina. I am 23 years old! I am apassionat about technologies and learning new things.<br></br> I have taken a course about python "from cero to expert" in Udemy and now i'm finishing one about Developer Web Full Stack in <a href="https://academianumen.com/desarrollo-web-full-stack/"
            target="_blank" rel="noopener noreferrer"  className="no-underline">Academia Numen</a>
            </p>
            </div>
            <div className="box-border w-screen h-20 sm:h-48 flex justify-between">
                <img className="h-50 transition-all duration-500 hover:scale-125" src={cloud} alt="" />
                <img className="h-50 transition-all duration-500 hover:scale-125"src={cloud} alt="" />
                <img className="h-50 transition-all duration-500 hover:scale-125" src={cloud} alt="" />
                <img className="h-50 transition-all duration-500 hover:scale-125" src={cloud} alt="" />
                <img className="h-50 transition-all duration-500 hover:scale-125" src={cloud} alt="" />
            </div>
            
       
           
        </div>
    )
}

export default SectionMe;