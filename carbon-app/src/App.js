import { useState } from "react";
import Slider from "./Slider";

function App() {
    const [value, setValue] = useState(0);

    return (
        <div className="App">
            <h2>Value: {value}</h2>
            <Slider
                Name="Value"
                Value={value}
                Min={0}
                Max={20}
                OnChange={setValue}
            />
        </div>
    );
}

export default App;
