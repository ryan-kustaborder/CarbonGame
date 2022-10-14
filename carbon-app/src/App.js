import Control from "./Control";
import CONTROLS, {
    ENERGY_EFFICIENCY,
    ENERGY_PRODUCTION,
    LAND_MANAGEMENT,
} from "./Controls";

import React, { Component } from "react";

class App extends Component {
    constructor(props) {
        super(props);

        let initState = { _view: ENERGY_EFFICIENCY };

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
            if (control.category !== this.state._view) {
                continue;
            }

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
                    {this.calcCategoryPoints(ENERGY_EFFICIENCY)}
                </h2>
                <h2>
                    Points from Energy Production:
                    {this.calcCategoryPoints(ENERGY_PRODUCTION)}
                </h2>
                <h2>
                    Points from Land Management:
                    {this.calcCategoryPoints(LAND_MANAGEMENT)}
                </h2>
                <select
                    value={this.state._view}
                    onChange={(e) => {
                        this.setState({ _view: e.target.value });
                    }}
                >
                    <option value={ENERGY_EFFICIENCY}>Energy Efficiency</option>
                    <option value={ENERGY_PRODUCTION}>Energy Production</option>
                    <option value={LAND_MANAGEMENT}>Land Management</option>
                </select>
                {controls}
            </div>
        );
    }
}

export default App;
