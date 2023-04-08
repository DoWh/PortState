import React from "react";
import NetIP from "./NetIP";

function ServerHeader(){
    return (    
        <header className="pt-4 pb-4 flex flex-row items-center border-b-2 text-xl" >
            <div className="ml-8 p-1 opacity-25 select-none">My ip:</div>
            <div className="p-1 select-all"><NetIP/></div>
        </header>
    )
}

export default ServerHeader;



    
    