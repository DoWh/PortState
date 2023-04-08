import React, { useEffect, useState } from "react";
import PortPlaceholder from "./PortPlaceholder";
import ToggleTCP from "./ToggleTCP";
import ToggleUDP from "./ToggleUDP";

function PortUnit(props){

    const [data,setData] = useState({
        port: '',
        disabled: 0,
    });

    return (
        <section className="flex m-2 border-2 items-center select-none">
            <PortPlaceholder data={data} setData={setData} />
            <ToggleTCP data={data} setData={setData} />
            <ToggleUDP data={data} setData={setData} />
            {props.unitHave !== 1 &&
                <div 
                className="ml-auto remove-btn-wrapper"
                onClick={props.onRemove}
                >
                    <img className="cursor-pointer w-12 m-2 mr-4" src="/img/remove.svg" alt="remove this port unit"/>
                </div>
            }
            
        </section>
    );
}


export default PortUnit;
