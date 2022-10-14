import { useState } from "react";
import Control from "./Control";
import CONTROLS from "./Controls";

import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);

        let initState = {};

        for (let [key, control] of Object.entries(CONTROLS)) {
            initState[control.name] = 0;
        }

        this.state = initState;
    }

    render() {
        const controls = [];

        for (let [key, control] of Object.entries(CONTROLS)) {
            controls.push(
                <Control
                    Value={this.state[control.name]}
                    SetValue={(value) => {
                        let newState = { ...this.state };
                        newState[control.name] = value;
                        this.setState(newState);
                    }}
                    Control={control}
                />
            );
        }

        return <div className="App">{controls}</div>;
    }
}

export default App;
