import React from "react";

function PortUnit(props){
    console.log('props',props.key)
    return (
        <section className="flex m-2 border-2 items-center">
            <div><input className="w-20 ml-2 p-2 focus:border-green-500 focus:ring-green-500" type="number"/></div>
            <label className="relative items-center cursor-pointer ml-5">
                <input type="checkbox" className="sr-only peer"/>
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900 select-none">TCP</span>
            </label>
            <label className="relative items-center cursor-pointer ml-5">
                <input type="checkbox" className="sr-only peer"/>
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-400">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900 select-none">UDP</span>
            </label>
            {console.log(this)}
            <div className="border ml-auto remove-btn-wrapper blabla">
                <img className="cursor-pointer w-12 m-2 mr-4" src="/img/remove.svg" alt="remove this port unit"/>
            </div>
        </section>
    )
}


export default PortUnit;