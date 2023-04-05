import React from "react";
import NetIP from "./NetIP";

function ServerHeader(){
    return (    
        <header className="flex flex-row items-center border-b-2 text-xl" >
            <div className="ml-8 p-1 opacity-25 select-none">My ip:</div>
            <div className="p-1 select-all"><NetIP/></div>
            <div className="p-1 ml-auto">
                <img src="/img/add.svg" className="cursor-pointer w-12 m-2 mr-4" alt="add PortUnit"/>
            </div>
        </header>
    )
}

export default ServerHeader;



    
    