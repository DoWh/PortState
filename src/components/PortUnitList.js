import React from "react";

function PortUnitList(){
    return (
        <div className="flex m-2 border-2 items-center">
            <div><input className="border w-20 ml-2 p-2 outline-none" type="number"/></div>
            <div><input className="border hidden" type="checkbox"/></div>
            <div><input className="border hidden" type="checkbox"/></div>
            <div  className="border ml-auto">
                <img className="cursor-pointer w-12 m-2 mr-4" src="/img/remove.png"/>
            </div>
        </div>
    )
}

export default PortUnitList;