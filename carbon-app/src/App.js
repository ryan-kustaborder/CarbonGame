import Control from "./Control";
import CONTROLS, {
    ENERGY_EFFICIENCY,
    ENERGY_PRODUCTION,
    LAND_MANAGEMENT,
} from "./Controls";

import WEIGHTS from "./images/weights.png";

import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class App extends Component {
    constructor(props) {
        super(props);

        let initState = {
            _view: ENERGY_EFFICIENCY,
            _total: 0,
            _controlsUsed: 0,
            _pointsEfficiency: 0,
            _pointsProduction: 0,
            _pointsManagement: 0,
        };

        for (let control of Object.values(CONTROLS)) {
            initState[control.name] = 0;
        }

        this.state = initState;
    }

    onChange() {
        let pointsTotal = 0;
        let pointsEfficiency = 0;
        let pointsProduction = 0;
        let pointsManagement = 0;
        let remainingOptions = 0;

        for (let control of Object.values(CONTROLS)) {
            let points = this.state[control.name];
            let green = control.green * points * 2;
            let blue = control.blue * points * 3;
            let red = control.red * points * 10;
            let black = control.black * points * 1;

            let value = green + blue + red + black;

            let cat = control.category;

            // Update Total Score
            pointsTotal += value;

            // Update Category Specific Scores
            if (cat === ENERGY_EFFICIENCY) {
                pointsEfficiency += value;
            } else if (cat === ENERGY_PRODUCTION) {
                pointsProduction += value;
            } else if (cat === LAND_MANAGEMENT) {
                pointsManagement += value;
            }

            // Update Used Options
            remainingOptions += parseInt(this.state[control.name]);
        }

        let newState = {
            _total: pointsTotal,
            _controlsUsed: remainingOptions,
            _pointsEfficiency: pointsEfficiency,
            _pointsProduction: pointsProduction,
            _pointsManagement: pointsManagement,
        };

        this.setState(newState);
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
                        this.setState(newState, () => {
                            this.onChange();
                        });
                    }}
                    Control={control}
                />
            );
        }

        return (
            <div className="App">
                <img id="Weights" src={WEIGHTS} />
                <div id="Scores">
                    <div id="Breakdown">
                        <ProgressBar
                            Direction="horizontal"
                            Value={this.state._controlsUsed}
                            Max={100}
                        />
                        <p>
                            Energy Efficiency:
                            <span>{this.state._pointsEfficiency}</span>
                        </p>
                        <p>
                            Energy Production:
                            <span>{this.state._pointsProduction}</span>
                        </p>
                        <p>
                            Land Management:
                            <span>{this.state._pointsManagement}</span>
                        </p>
                        <p>
                            Total Carbon Points:
                            <span>{this.state._total}</span>
                        </p>
                    </div>
                    <div id="Total">
                        <ProgressBar Value={this.state._total} Max={10000} />
                    </div>
                </div>

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
