import Control from "./Control";
import CONTROLS from "./Controls";

import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);

        let initState = {};

        for (let control of Object.values(CONTROLS)) {
            initState[control.name] = 0;
        }

        this.state = initState;
    }

    calcTotalPoints() {
        let sum = 0;

        for (let control of Object.values(CONTROLS)) {
            let points = this.state[control.name];
            let green = control.green * points * 2;
            let blue = control.blue * points * 3;
            let red = control.red * points * 10;
            let black = control.black * points * 1;

            sum += green + blue + red + black;
        }

        return sum;
    }

    calcCategoryPoints(category) {
        let sum = 0;

        for (let control of Object.values(CONTROLS)) {
            if (control.category !== category) {
                continue;
            }

            let points = this.state[control.name];
            let green = control.green * points * 2;
            let blue = control.blue * points * 3;
            let red = control.red * points * 10;
            let black = control.black * points * 1;

            sum += green + blue + red + black;
        }

        return sum;
    }

    calcOptionsRemaining() {
        let sum = 0;

        for (let control of Object.values(CONTROLS)) {
            sum += parseInt(this.state[control.name]);
        }

        return 100 - sum;
    }

    render() {
        const controls = [];

        for (let control of Object.values(CONTROLS)) {
            controls.push(
                <Control
                    key={control.name}
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

        return (
            <div className="App">
                <h2>
                    Remaining Options:
                    {this.calcOptionsRemaining()}
                </h2>
                <h1>Total Value: {this.calcTotalPoints()}</h1>
                <h2>
                    Points from Energy Efficiency:
                    {this.calcCategoryPoints("Energy Efficiency")}
                </h2>
                <h2>
                    Points from Energy Production:
                    {this.calcCategoryPoints("Energy Production")}
                </h2>
                <h2>
                    Points from Land Management:
                    {this.calcCategoryPoints("Land Management")}
                </h2>
                {controls}
            </div>
        );
    }
}

export default App;
