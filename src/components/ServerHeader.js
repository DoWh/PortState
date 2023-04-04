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
        <header className="flex justify-between p-4 border-b-2 text-xl">
            <div className="basis-1/4 text-right p-1 opacity-25 select-none mt-6">My ip:</div>
            <div className="basis-1/4 p-1 select-all mt-6">{myIp}</div>
            <div className="basis-1/2 justify-self-end p-1">
                <img src="/img/add.png" className="cursor-pointer float-right p-2 w-16"/>
            </div>
        </header>
    )
}

export default ServerHeader;



    
    