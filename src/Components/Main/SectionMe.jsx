import React from "react";
import Me from "./Img/Me.jpg";

function SectionME() {
    return(
        <div id="About" className="flex flex-wrap min-h-screen  bg-green-200 gap-10 justify-center items-center pt-12 w-screen">
           <img src={Me} alt="Me" className="max-h-[700px] min-h-[100px] " />
           <div className="bg-red-200 h-auto max-w-lg sm:pt-48 max- box-border">
            <h1 className="pb-2">Hi, I´m Noé Navarrete</h1>
            <h2>Web Developer</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, ea odit? Nam doloremque porro voluptates asperiores ipsam ducimus modi reprehenderit illum inventore exercitationem dignissimos, atque incidunt, est dolor. Dolorum, atque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo delectus, perspiciatis iste similique nam! Ducimus maiores esse molestias! Cum iure impedit enim aliquam nulla quo repudiandae laudantium fugit maxime?
            </p>
           </div>
        </div>
    )
}

export default SectionME;