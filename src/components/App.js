import React, { useState } from "react";
import Server from "./Server";
import Client from "./Client";

function App(){

    const [setting, setSetting] = useState(false);

    if (setting) {
        return <Client />;
    }
    return <Server />;
    
}

export default App;