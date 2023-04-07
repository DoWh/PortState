import React, { useState } from "react";
import PortPlaceholder from "./PortPlaceholder";
import ToggleTCP from "./ToggleTCP";
import ToggleUDP from "./ToggleUDP";

function PortUnit(props){

    const [port,setPort] = useState()
    
    return (
        <section className="flex m-2 border-2 items-center">
            <PortPlaceholder setPort={setPort} />
            <ToggleTCP port={port} />
            <ToggleUDP port={port} />
            <div 
                className="border ml-auto remove-btn-wrapper"
                onClick={props.onRemove}
            >
                <img className="cursor-pointer w-12 m-2 mr-4" src="/img/remove.svg" alt="remove this port unit"/>
            </div>
        </section>
    )
}


export default PortUnit;