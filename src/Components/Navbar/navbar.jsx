import React from "react";
import * as styles from "./styles"

function NavBar() {
    return(
        <nav className="fixed flex w-screen h-16 bg-indigo-800 justify-between text-white shadow-lg shadow-black ">
            <div className="flex items-center w-1/6 justify-evenly">
                <a className={styles.a} href="">Inicio</a>
                </div>
            <div className=" hidden sm:flex sm:w-1/3  ">
                <ul className="flex  w-full h-full justify-evenly items-center">
                    <li className={styles.li}>
                        <a href="" className={styles.a}>About</a>
                        </li>
                    <li className={styles.li} >
                        <a href="" className={styles.a}>Tecnoligies</a>
                        </li>
                    <li className={styles.li}>
                        <a href="" className={styles.a}>Projects</a>
                        </li>
                    <li className={styles.li}>
                        <a href="" className={styles.a}>Contact</a>
                        </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;