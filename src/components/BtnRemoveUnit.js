import React from "react";

function BtnRemoveUnit({ count, removeUnit }){
    if (count === 1) return null;

    return (
        <div 
            className="ml-auto remove-btn-wrapper"
            onClick={removeUnit}
        >
            <img className="cursor-pointer w-12 m-2 mr-4" src="/img/remove.svg" alt="remove this port unit"/>
        </div>
    )
}

export default BtnRemoveUnit;