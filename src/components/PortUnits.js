import React, { useState } from "react";
import PortPlaceholder from "./PortPlaceholder";
import ToggleTCP from "./ToggleTCP";
import ToggleUDP from "./ToggleUDP";
import BtnRemoveUnit from "./BtnRemoveUnit";
import BtnAddUnit from "./BtnAddUnit";

function PortUnits(){

    const [unitId, setUnitId] = useState(1)
    const [units, setUnits] = useState([{
        id: 0,
        port: '',
        tcp: false,
        udp: false,
    }]);

    //update prop for unit
    function updateProp( id, prop ){
        let copy = units.slice();
        let index = copy.findIndex( unit => unit.id === id);
        copy[index] = Object.assign([], copy[index]);
        Object.assign(copy[index], prop);
        setUnits(copy);
    }

    function removeUnit( id ){
        let copy = units.filter( unit => unit.id != id )
        setUnits(copy);
    }

    function addUnit(){
        setUnits([...units, {
            id: unitId,
            port: '',
            tcp: false,
            udp: false,
        }])
        setUnitId(unitId+1)
    }

    return (
        <div>
            {units.map( unit => 
                <section key={unit.id} className="flex m-2 border-2 items-center select-none">
                    <PortPlaceholder unit={unit} updateProp={updateProp} />
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

// <div>
//     <input 
//         disabled={(data.disabled !== 0)}
//         className="w-20 mt-4 mb-4 ml-2 p-2 focus:border-green-500 focus:ring-green-500 disabled:bg-slate-300 disabled:border-slate-300 rounded-xl text-center" 
//         type="text"
//         onChange={changePort}
//     />
// </div>