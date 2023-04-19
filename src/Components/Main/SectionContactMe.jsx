import React from "react";
import { ContactMe } from "./ContactMe";
import rocketImg from "..//../assets/Rocket.png"

function SectionContactMe () {

    return(
        <section id="ContactMe" className="w-screen">
            <div className=" flex justify-center">
            <p className="flex text-5xl transition-all duration-700 shadow-sm hover:scale-125 border-4 bg-[#0e0e58] border-[#f0f0ff] rounded-lg sm:text-6xl  text-white">Contact</p>
            </div>
            
            <div className="container">
                <div className="col sm:flex sm:flex-row  ">
                    <div className="col md-5">
                        <ContactMe />
                    </div>
                    <div className="col md-7 my-auto">
                        <img className="img-fluid w-100 transition-all duration-700 hover:-translate-y-20 hover:translate-x-20" src={rocketImg} alt="rocket-img" />
                    </div>

                </div>
            </div>


        </section>
    )
}


export default SectionContactMe;