import React from "react";
import addUnitImg from '../img/add.svg';

function BtnAddUnit({ actionAddUnit }){
    return (
        <div 
            className="cursor-pointer flex justify-center m-2 bg-slate-200 rounded-md items-center select-none"
            onClick={actionAddUnit}
        >
            <img src={addUnitImg} className="w-12 m-2 mr-4" alt="add PortUnit"/>
            <div className="text-2xl font-bold">Add new section</div>
        </div>
    )
}

export default BtnAddUnit;