import React from "react";

function ToggleUDP({ port }){

    async function toggle( event ){
        console.log(`toggleTCP port ${port}`)
        if (event.target.checked) {
            window.electron.startUDP(port)
        } else {
            window.electron.stopUDP(port)
        }
    }

    return (
        <label className="relative items-center cursor-pointer ml-5">
            <input 
                type="checkbox" 
                className="sr-only peer"
                onChange={toggle}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400">
            </div>
            <span className="ml-3 text-sm font-medium text-gray-900 select-none">UDP</span>
        </label>
    )
}

export default ToggleUDP;