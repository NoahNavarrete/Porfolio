import React from "react";

function NavBar() {
    return(
        <nav className="flex w-screem h-16  bg-green-800 justify-between text-white">
            <div className="flex bg-blue-800 items-center w-1/6 justify-evenly">
                <a className="" href="">Inicio</a>
                </div>
            <div className="bg-red-400 sm:w-1/3 ">
                <ul className="flex bg-slate-800 w-full h-full justify-evenly items-center">
                    <li className="pr-5 shadow-red-200 drop-shadow-2xl">
                        <a href="">About</a>
                        </li>
                    <li className="pr-5" >
                        <a href="">Tecnoligias</a>
                        </li>
                    <li className="pr-5">
                        <a href="">Projects</a>
                        </li>
                    <li className="pr-5">
                        <a href="">Contact</a>
                        </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;