import React from "react";

function PortPlaceholder({ setPort }){

    //input port controller
    function changePort(event){
        let value = event.target.value;
        let last = value.slice(0,value.length-1);
        //allow only numbers
        event.target.value = value.replace(/[^0-9]/g, '')
        //allow only port dis
        if (value > 65535) event.target.value = last;
        setPort(event.target.value)
    }

    return (
        <div>
            <input 
                className="w-20 mt-2 mb-2 ml-2 p-2 focus:border-green-500 focus:ring-green-500" 
                type="text"
                onChange={changePort}
            />
        </div>
    )
}

export default PortPlaceholder;