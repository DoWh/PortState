import React, { useState } from "react";
import PortUnit from "./PortUnit";
import PortUnitAddBtn from "./PortUnitAddBtn";


function PortUnitList(){
    const [units, setUnits] = useState([])
    const [unitCount, setUnitCount] = useState(0)
    
    //action for add new PortUnit
    function addUnit(){
        setUnits([...units, {
            id: unitCount,
        }]);
        setUnitCount(unitCount+1)
    }
    //action for remove PortUnit
    function removeUnit(id){
        setUnits(units.filter(unit => unit.id != id));
    }

    return (
        <div>
            {units.map( unit => 
                <PortUnit 
                    key={unit.id}
                    onRemove={removeUnit.bind(null, unit.id)}
                />
            )}
            <PortUnitAddBtn onClick={addUnit}/>
        </div>
    )
}

export default PortUnitList;

