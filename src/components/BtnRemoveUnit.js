import React from "react";
import removeImg from '../img/remove.svg'

function BtnRemoveUnit({ count, removeUnit }){
    if (count === 1) return null;

    return (
        <div 
            className="ml-auto remove-btn-wrapper"
            onClick={removeUnit}
        >
            <img className="cursor-pointer w-12 m-2 mr-4" src={removeImg} alt="remove this port unit"/>
        </div>
    )
}

export default BtnRemoveUnit;