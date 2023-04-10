import React from "react";

function ToggleTCP({ unit, updateProp }){

    async function toggle( event ){
        console.log(`toggleTCP port ${unit.port}`)
        if (event.target.checked) {
            window.electron.startTCP(unit.port)
            updateProp(unit.id, { tcp: true })
        } else {
            window.electron.stopTCP(unit.port)
            updateProp(unit.id, { tcp: false })
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
            <span className="ml-3 text-sm font-medium text-gray-900 select-none">TCP</span>
        </label>
    )
}

export default ToggleTCP;