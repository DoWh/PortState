import React from "react";
import { Spinner } from "flowbite-react";
import { useState, useEffect } from "react";

function NetworkIp(){
    let load = (
        <Spinner
            color="success"
            aria-label="Success spinner example"
        />
    );
    const [myIp, setMyIp] = useState(load);
    //get ip
    useEffect(()=>{
        (async () => {
            let res = await fetch('https://api.ipify.org')
            setMyIp(await res.text())
        })()
        return;
    });
    return (
        <>
            {myIp}
        </>
    )
}

export default NetworkIp;