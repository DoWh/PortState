import React, { useState } from "react";
import PortPlaceholder from "./PortPlaceholder";
import ToggleTCP from "./ToggleTCP";
import ToggleUDP from "./ToggleUDP";
import BtnRemoveUnit from "./BtnRemoveUnit";
import BtnAddUnit from "./BtnAddUnit";
import AlertWrongPort from "./AlertWrongPort";

function PortUnits(){

    const [unitId, setUnitId] = useState(1)
    const [units, setUnits] = useState([{
        id: 0,
        port: '',
        tcp: false,
        udp: false,
        errorTCP: false,
        errorUDP: false,
    }]);

    //update prop for unit
    function updateProp( id, prop ){
        let copy = units.slice();
        let index = copy.findIndex( unit => unit.id === id);
        copy[index] = Object.assign({}, copy[index]);
        Object.assign(copy[index], prop);
        setUnits(copy);
    }

    async function removeUnit( id ){
        //finding unit
        let index = units.findIndex( unit => unit.id === id);
        let port = units[index].port;
        //off server before remove unit
        let onlineTCP = await window.electron.checkTCP(port);
        let onlineUDP = await window.electron.checkUDP(port);
        if (onlineTCP) window.electron.stopTCP(port);
        if (onlineUDP) window.electron.stopUDP(port);
        //remove unit from list
        let copy = units.filter( unit => unit.id != id )
        setUnits(copy);
    }

    function addUnit(){
        setUnits([...units, {
            id: unitId,
            port: '',
            tcp: false,
            udp: false,
            errorTCP: false,
            errorUDP: false,
        }])
        setUnitId(unitId+1)
    }

    return (
        <div className="relative">
            {units.map( unit => 
                <section key={unit.id} className="flex m-2 border-2 items-center select-none">
                    <PortPlaceholder unit={unit} updateProp={updateProp} />
                    <AlertWrongPort error={unit.errorTCP || unit.errorUDP} />
                    <ToggleTCP unit={unit} updateProp={updateProp} />
                    <ToggleUDP unit={unit} updateProp={updateProp} />
                    <BtnRemoveUnit count={units.length} removeUnit={removeUnit.bind(null, unit.id)}/>
                </section>
            )}
            <BtnAddUnit actionAddUnit={addUnit}/>
        </div>
    )
}

export default PortUnits;