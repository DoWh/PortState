import React, { useState, createContext, useContext } from "react";
import ServerHeader from "./ServerHeader";
import PortUnits from "./PortUnits";

function Server(){

    return (
        <>
            <ServerHeader/>
            <PortUnits />
        </>
    )
}

export default Server;