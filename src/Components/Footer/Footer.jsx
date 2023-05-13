import React from "react";
import * as  styles from "./Styles"
import {faGithub, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons"
import { Icon } from "./Icon";

function Footer () {
    return(
        <footer id="Footer" className="h-auto overflow-hidden w-screen text-white bg-sky-600 flex flex-row flex-wrap justify-around no-underline">

            <div className="h-auto w-full justify-around  flex flex-row  sm:w-full sm:gap-6 sm:justify-around flex-wrap no-underline">
            <div className={styles.div}>
                <h2 className=" self-center">Menu</h2>
                <a href="#About" className={styles.a}> About</a>
                <a href="#Tech" className={styles.a}> Technologies</a>
                <a href="#Projects" className={styles.a}> Projects</a>
                
            </div>
            <div className={styles.div}>
                <h2 className="self-center">Contact</h2>
                <p className={styles.a}> Buenos Aires Argentina</p>
                <p  className={styles.a}> noenavarrete71@outlook.com</p>
                <p  className={styles.a}> noenavarrete71@gmail.com</p>
                
            </div>
            <div className={styles.div2}>
    
                <div className={styles.div3}>

                <a href="https://www.linkedin.com/in/noe-navarrete/"className={styles.a}>
                    <Icon css={styles.icon} icon={faLinkedin}/>
                </a>

                <a href="https://github.com/NoahNavarrete"className={styles.a} >
                    <Icon css={styles.icon} icon={faGithub}/>
                </a>
                <a href="https://www.instagram.com/noah.navarrete/"className={styles.a}>
                <Icon css={styles.icon} icon={faInstagram}/>


                </a>
                </div>
            </div>

            </div>


        </footer>
    )
}

export default Footer;
