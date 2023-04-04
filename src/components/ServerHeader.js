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
        <header>
            my ip: {myIp}, btnAddPortUnit
        </header>
    )
}

export default ServerHeader;



    
    