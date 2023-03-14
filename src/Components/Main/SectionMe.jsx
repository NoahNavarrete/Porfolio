import React from "react";
import Me from "./Img/Me.jpg";

function SectionME() {
    return(
        <div id="About" className="flex h-screen bg-green-200 gap-10 justify-center pt-12 ">
           <img src={Me} alt="Me" className="h-[700px]" />
           <div className="bg-red-200 h-full pt-48 w-1/3 box-border">
            <h1>Hi, I´m Noé Navarrete</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, ea odit? Nam doloremque porro voluptates asperiores ipsam ducimus modi reprehenderit illum inventore exercitationem dignissimos, atque incidunt, est dolor. Dolorum, atque?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo delectus, perspiciatis iste similique nam! Ducimus maiores esse molestias! Cum iure impedit enim aliquam nulla quo repudiandae laudantium fugit maxime?
            </p>
           </div>
        </div>
    )
}

export default SectionME;