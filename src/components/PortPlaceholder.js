import React from "react";

function formatPort(value){
    let last = value.slice(0,value.length-1);
    //allow only numbers
    value = value.replace(/[^0-9]/g, '')
    //allow only port dis
    if (value > 65535) value = last;
    return value;
}

function PortPlaceholder({ unit, updateProp }){
    // input port controller
    function changePort(event){
        let port = formatPort(event.target.value);
        event.target.value = port;
        updateProp(unit.id, { port: port })
    }
    
    return (
        <div>
            <input 
                disabled={ unit.tcp || unit.udp }
                className="w-20 mt-4 mb-4 ml-2 p-2 focus:border-green-500 focus:ring-green-500 disabled:bg-slate-300 disabled:border-slate-300 rounded-xl text-center" 
                type="text"
                onChange={changePort}
            />
        </div>
    )
}

export default PortPlaceholder;