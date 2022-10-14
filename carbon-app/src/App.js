import Option from "./Option";
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

            _optionsTotal: 0,
            _optionsEfficiency: 0,
            _optionsProduction: 0,
            _optionsManagement: 0,

            _pointsTotal: 0,
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

        let optionsTotal = 0;
        let optionsEfficiency = 0;
        let optionsProduction = 0;
        let optionsManagement = 0;

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

            // Update Total Options Used
            let options = parseInt(this.state[control.name]);
            optionsTotal += options;

            // Update Category Specific Options Used
            if (cat === ENERGY_EFFICIENCY) {
                optionsEfficiency += options;
            } else if (cat === ENERGY_PRODUCTION) {
                optionsProduction += options;
            } else if (cat === LAND_MANAGEMENT) {
                optionsManagement += options;
            }
        }

        let newState = {
            _pointsTotal: pointsTotal,
            _pointsEfficiency: pointsEfficiency,
            _pointsProduction: pointsProduction,
            _pointsManagement: pointsManagement,

            _optionsTotal: optionsTotal,
            _optionsEfficiency: optionsEfficiency,
            _optionsProduction: optionsProduction,
            _optionsManagement: optionsManagement,
        };

        this.setState(newState);
    }

    render() {
        let categoryLimit;

        if (this.state._view === ENERGY_EFFICIENCY) {
            categoryLimit = (
                <ProgressBar
                    Direction="horizontal"
                    Value={this.state._optionsEfficiency}
                    Max={50}
                />
            );
        } else if (this.state._view === ENERGY_PRODUCTION) {
            categoryLimit = (
                <ProgressBar
                    Direction="horizontal"
                    Value={this.state._optionsProduction}
                    Max={75}
                />
            );
        } else if (this.state._view === LAND_MANAGEMENT) {
            categoryLimit = (
                <ProgressBar
                    Direction="horizontal"
                    Value={this.state._optionsManagement}
                    Max={25}
                />
            );
        }

        const controls = [];

        for (let control of Object.values(CONTROLS)) {
            if (control.category !== this.state._view) {
                continue;
            }

            controls.push(
                <Option
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
                <div id="Top">
                    <img
                        id="Weights"
                        src={WEIGHTS}
                        alt="Carbon point multiplier by category"
                    />
                    <div id="Scores">
                        <div id="Breakdown">
                            <select
                                value={this.state._view}
                                onChange={(e) => {
                                    this.setState({ _view: e.target.value });
                                }}
                            >
                                <option value={ENERGY_EFFICIENCY}>
                                    Energy Efficiency
                                </option>
                                <option value={ENERGY_PRODUCTION}>
                                    Energy Production
                                </option>
                                <option value={LAND_MANAGEMENT}>
                                    Land Management
                                </option>
                            </select>

                            {categoryLimit}

                            <p>Options Remaining:</p>
                            <ProgressBar
                                Direction="horizontal"
                                Value={this.state._optionsTotal}
                                Max={100}
                            />
                            <p>Energy Efficiency:</p>
                            <span>{this.state._pointsEfficiency}</span>

                            <p>Energy Production:</p>
                            <span>{this.state._pointsProduction}</span>

                            <p>Land Management:</p>
                            <span>{this.state._pointsManagement}</span>

                            <p>Total Carbon Points:</p>
                            <span>{this.state._pointsTotal}</span>
                        </div>
                        <div id="Total">
                            <ProgressBar
                                Value={this.state._pointsTotal}
                                Max={10000}
                            />
                        </div>
                    </div>
                </div>

                {controls}
            </div>
        );
    }
}

export default App;
