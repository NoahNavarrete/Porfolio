import React from "react";
import { ContactMe } from "./ContactMe";
import rocketImg from "..//../assets/Rocket.png"

function SectionContactMe () {

    return(
        <section className="w-screen">
            <div className="container mt-3">
                <div className="row">
                    <div className="col md-5">
                        <ContactMe />
                    </div>
                    <div className="col md-7 my-auto">
                        <img className="img-fluid w-100" src={rocketImg} alt="rocket-img" />
                    </div>

                </div>
            </div>


        </section>
    )
}


export default SectionContactMe;