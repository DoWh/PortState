import React from "react";

function PortPlaceholder({ data, setData }){

    //input port controller
    function changePort(event){
        let value = event.target.value;
        let last = value.slice(0,value.length-1);
        //allow only numbers
        event.target.value = value.replace(/[^0-9]/g, '')
        //allow only port dis
        if (value > 65535) event.target.value = last;
        setData( prev => ({
            port: event.target.value,
            disabled: prev.disabled,
        }))
    }
    
    return (
        <div>
            <input 
                disabled={(data.disabled !== 0)}
                className="w-20 mt-2 mb-2 ml-2 p-2 focus:border-green-500 focus:ring-green-500 disabled:bg-slate-300 disabled:border-slate-300 rounded-xl text-center" 
                type="text"
                onChange={changePort}
            />
        </div>
    )
}

export default PortPlaceholder;