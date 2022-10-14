import Option from "./Option";
import OPTIONS, {
    ENERGY_EFFICIENCY,
    ENERGY_PRODUCTION,
    LAND_MANAGEMENT,
} from "./Options";

import WEIGHTS from "./images/weights.png";

import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class App extends Component {
    constructor(props) {
        super(props);

        // Initialize the state variables
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

        // Add a value for each option
        for (let option of Object.values(OPTIONS)) {
            initState[option.name] = 0;
        }

        this.state = initState;
    }

    // Runs when an option is changed
    // Calculates point values and counts options used
    onChange() {
        let pointsTotal = 0;
        let pointsEfficiency = 0;
        let pointsProduction = 0;
        let pointsManagement = 0;

        let optionsTotal = 0;
        let optionsEfficiency = 0;
        let optionsProduction = 0;
        let optionsManagement = 0;

        // Get values from each option
        for (let option of Object.values(OPTIONS)) {
            // Get current amount invested in option
            let points = this.state[option.name];

            // Get individual category values
            let green = option.green * points * 2;
            let blue = option.blue * points * 3;
            let red = option.red * points * 10;
            let black = option.black * points * 1;

            // Get total points
            let value = green + blue + red + black;

            // Get the category of option
            let cat = option.category;

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
            let options = parseInt(this.state[option.name]);
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

        // Construct new state
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
        // Create progress bar for specific category
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

        // Generate DOM elements for each option
        const options = [];

        for (let option of Object.values(OPTIONS)) {
            // Skip options in other categories
            if (option.category !== this.state._view) {
                continue;
            }

            options.push(
                <Option
                    key={option.name}
                    Value={this.state[option.name]}
                    SetValue={(value) => {
                        // Copy old state
                        let newState = { ...this.state };

                        // Set the new value
                        newState[option.name] = value;

                        // Set the state and then call onChange
                        this.setState(newState, () => {
                            this.onChange();
                        });
                    }}
                    Option={option}
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
                                Label="Total Carbon Points"
                            />
                        </div>
                    </div>
                </div>

                {options}
            </div>
        );
    }
}

export default App;
