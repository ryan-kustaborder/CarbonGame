import { useState } from "react";
import PointBar from "./PointBar";
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
            <PointBar
                Points={value}
                Green={15}
                Blue={3}
                Red={6}
                Black={0}
                Max={2970}
            />
        </div>
    );
}

export default App;
