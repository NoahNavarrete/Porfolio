import React, { useState } from "react";
import * as styles from "./styles"
import { Link } from "react-scroll";
import {faBars } from "@fortawesome/free-solid-svg-icons"
import {Icon }from "../Footer/Icon"




function NavBar() {
    const [open, setOpen] = useState(true)



    return(
        <nav className=" absolute sm:fixed z-50 sm:justify-between flex w-screen h-16 bg-sky-600/90 justify-between text-white shadow-lg  ">
            <div className="flex items-center w-1/6 justify-evenly">
                <Link to={"About"} href="#About" className={styles.a} 
                 smooth={true}
                 offset={0}
                 duration={500}
                 >Home</Link>
                </div>
                <div className="sm:hidden pr-4 flex self-center ">
                    <button className="" onClick={()=> setOpen(!open)}>
                    <Icon icon={faBars} css="sm:hidden text-4xl"/>

                    </button>
                </div>
            <div className={`${!open ? "bg-sky-600 mt-16 flex flex-col absolute w-full " : " hidden sm:visible"}  sm:w-1/3 sm:flex  `}>
                <ul className={`${!open ? "flex flex-col self-center" : "w-0"} sm:visibles sm:flex sm:w-full sm:h-full sm:pr-40 sm:justify-evenly sm:items-center`}>
                    <li className={styles.li}>
                        <Link to={"About"} href="#About" className={styles.a}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >About</Link>
                        </li>
                    <li className={styles.li} >
                        <Link to={"Tech"} href="#Tech" className={styles.a}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >Technoligies</Link>
                        </li>
                    <li className={styles.li}>
                        <Link to={"Projects"} href="#Projects" className={styles.a}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        >Projects</Link>
                        </li>
                    <li className={styles.li}>
                        <Link to={"ContactMe"} href="#ContactMe" className={styles.a}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        >Contact</Link>
                        </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;