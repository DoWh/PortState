import React from "react";
import { useState, useEffect } from "react";

function ServerHeader(){
    const [myIp, setMyIp] = useState('load ip...');
    //get ip
    useEffect(()=>{
        return async () => {
            let res = await fetch('https://api.ipify.org')
            setMyIp(await res.text())
        }
    });
    return (    
        <header className="flex flex-row items-center border-b-2 text-xl" >
            <div className="ml-4 p-1 opacity-25 select-none">My ip:</div>
            <div className="p-1 select-all">{myIp}</div>
            <div className="p-1 ml-auto">
                <img src="/img/add.png" className="cursor-pointer w-12 m-2 mr-4"/>
            </div>
        </header>
    )
}

export default ServerHeader;



    
    