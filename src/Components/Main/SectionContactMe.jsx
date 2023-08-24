import React from "react";
import { ContactMe } from "./ContactMe";
import rocketImg from "..//../assets/Rocket.png"

function SectionContactMe () {

    return(
        <section id="ContactMe" className=" overflow-hidden">
            <div className=" flex justify-center box-border">
            <p className="flex text-5xl transition-all duration-700 shadow-sm hover:scale-125 bg-sky-600/90 p-2 mt-2 rounded-lg sm:text-6xl  text-white">Contact</p>
            </div>
            
            <div className="container flex flex-wrap ">
                <div className=" flex flex-col sm:flex sm:flex-row  ">
                    <div className="col md-5 bg-slate-100/30 p-5 rounded-xl mb-10">
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