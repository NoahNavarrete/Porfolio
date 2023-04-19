import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Icon = ({css, icon}) =>{
    return(
        <FontAwesomeIcon className={css} icon={icon}/>
    )
}