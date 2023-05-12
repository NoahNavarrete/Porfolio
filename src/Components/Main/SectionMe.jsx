import React from "react";
import Me from "./Img/Me.png";
import cloud from "../../assets/cloud.png"

function SectionMe() {
    return(
        <div id="About" className=" flex flex-wrap min-h-screen pt-16 sm:gap-20 justify-center items-center sm:pt-2 w-screen">
            
            <div className=" flex w-full justify-between ">
                <img src={cloud} className="h-10 sm:h-48 transition-all duration-500 active:scale-125 sm:hover:scale-125" alt="" />
                <p className="flex text-5xl transition-all duration-700  shadow-sm active:scale-15  sm:hover:scale-125 border-4 bg-[#0e0e58] border-[#f0f0ff] rounded-lg mt-28 sm:text-6xl text-white">About</p>
                <img src={cloud} className=" h-10 sm:h-48 transition-all duration-500 hover:scale-125" alt="" />
            </div>
           <img src={Me} alt="Me" className="hover:scale-125 hover:rotate-3  min-h-[50px] " />



           <div className=" h-auto w-full max-w-3xl sm:p-5 mb-20 mt-3 sm:pt-48 box-border border-8 text-white hover:rotate-3 border-[#f0f0ff] rounded-3xl">
            <div className="mb-10 ">
            <h1 className="pb-2">Hi, I´m Noé Navarrete</h1>
            <h2>Web Developer</h2>

            </div>
            <p>I'm from Buenos Aires, Argentina. I am 23 years old! I am apassionat about technologies and learning new things.<br></br> I have taken a course about python "from cero to expert" in Udemy and now i'm finishing one about Developer Web Full Stack in <a href="https://academianumen.com/desarrollo-web-full-stack/"
            target="_blank" rel="noopener noreferrer"  className="no-underline">Academia Numen</a>
            </p>
            </div>
            <div className="box-border flex-wrap w-full max-h-20 sm:h-48 flex justify-between">
                <img className=" max-h-10 sm:max-h-20 transition-all duration-500 hover:scale-125" src={cloud} alt="" />
                <img className=" max-h-10 sm:max-h-20 transition-all duration-500 hover:scale-125"src={cloud} alt="" />
                <img className=" max-h-10 sm:max-h-20 transition-all duration-500 hover:scale-125" src={cloud} alt="" />
                <img className=" max-h-10 sm:max-h-20 transition-all duration-500 hover:scale-125" src={cloud} alt="" />
                <img className=" max-h-10 sm:max-h-20 transition-all duration-500 hover:scale-125" src={cloud} alt="" />
            </div>
            
       
           
        </div>
    )
}

export default SectionMe;