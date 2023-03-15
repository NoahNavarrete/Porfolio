import React from "react";

function Footer () {
    return(
        <footer className="h-[200px] bg-red-200 flex justify-around no-underline">
            <div className="bg-green-200 flex flex-col no-underline">
                <h2>Menu</h2>
                <a href="" className="no-underline"> About</a>
                <a href="" className="no-underline"> Tecnologies</a>
                <a href="" className="no-underline"> Project</a>
                
            </div>
            <div className="bg-green-300 flex flex-col">
                <h2>Contact</h2>
                <a href="" className="no-underline"> direccion</a>
                <a href="" className="no-underline"> email</a>
                
            </div>
            <div className="bg-green-600 flex flex-col">
                <h2>Redes</h2>
                <a href=""className="no-underline">Linkedin</a>
                <a href=""className="no-underline">instagram</a>
                <a href=""className="no-underline">github</a>
                <a href=""className="no-underline">Facebook</a>
            </div>


        </footer>
    )
}

export default Footer;