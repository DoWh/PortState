import React, { useState } from "react";

function PortUnit(props){

    const [port,setPort] = useState()

    async function toggleTCP(event){
        console.log(`toggleTCP port ${port}`)
        if (event.target.checked) {
            window.electron.startTCP(port)
        } else {
            window.electron.stopTCP(port)
        }
    }

    async function toggleUDP(event){
        console.log(`toggleTCP port ${port}`)
        if (event.target.checked) {
            window.electron.startUDP(port)
        } else {
            window.electron.stopUDP(port)
        }
    }

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
        <section className="flex m-2 border-2 items-center">
            <div>
                <input 
                    className="w-20 mt-2 mb-2 ml-2 p-2 focus:border-green-500 focus:ring-green-500" 
                    type="text"
                    onChange={changePort}
                />
            </div>
            <label className="relative items-center cursor-pointer ml-5">
                <input 
                    type="checkbox" 
                    className="sr-only peer"
                    onChange={toggleTCP}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900 select-none">TCP</span>
            </label>
            <label className="relative items-center cursor-pointer ml-5">
                <input 
                    type="checkbox" 
                    className="sr-only peer"
                    onChange={toggleUDP}
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900 select-none">UDP</span>
            </label>
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