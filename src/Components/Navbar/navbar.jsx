import React from "react";
import * as styles from "./styles"
import { Link } from "react-scroll";




function NavBar() {
    return(
        <nav className="fixed flex w-screen h-16 bg-indigo-800 justify-between text-white shadow-lg shadow-black ">
            <div className="flex items-center w-1/6 justify-evenly">
                <Link to={"About"} href="#About" className={styles.a} 
                 smooth={true}
                 offset={0}
                 duration={500}
                 >Inicio</Link>
                </div>
            <div className=" hidden sm:flex sm:w-1/3  ">
                <ul className="flex  w-full h-full justify-evenly items-center">
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
                        >Tecnoligies</Link>
                        </li>
                    <li className={styles.li}>
                        <Link to={"Projects"} href="#Projects" className={styles.a}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >Projects</Link>
                        </li>
                    <li className={styles.li}>
                        <Link to={"ContactMe"} href="#ContactMe" className={styles.a}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >Contact</Link>
                        </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;