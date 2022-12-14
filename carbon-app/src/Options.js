/*

Data Collector for Carbon Game Options

Each option has the following properties:
name - the name to be displayed and used as a key (must be unique!)
category - [ENERGY_EFFICIENCY | ENERGY_PRODUCTION | LAND_MANAGEMENT]
max - the maximum amount that can be invested into the option
green - tons of carbon per unit (Add Biomass)
blue - tons of carbon per unit (Reduce Ocean Acidification)
red - tons of carbon per unit (Remove CO2 From Atmosphere)
black - tons of carbon per unit (Save Fossil Fuels)

*/

export const LAND_MANAGEMENT = "Land Management";
export const ENERGY_PRODUCTION = "Energy Production";
export const ENERGY_EFFICIENCY = "Energy Efficiency";

const OPTIONS = {
    ConservationTillage: {
        name: "Conservation Tillage",
        category: LAND_MANAGEMENT,
        max: 5,
        green: 10,
        blue: 3,
        red: 6,
        black: 0,
    },
    MediocreFarmland: {
        name: "Plant Trees on Mediocre Farmland",
        category: LAND_MANAGEMENT,
        max: 30,
        green: 15,
        blue: 3,
        red: 6,
        black: 0,
    },
    ReduceCattle: {
        name: "Reduce Quantity of Cattle",
        category: LAND_MANAGEMENT,
        max: 5,
        green: 5,
        blue: 3,
        red: 6,
        black: 0,
    },
    RestoreWetlands: {
        name: "Restore Wetlands on Farmland",
        category: LAND_MANAGEMENT,
        max: 5,
        green: 20,
        blue: 4,
        red: 8,
        black: 0,
    },
    ReplaceCement: {
        name: "Replace Cement",
        category: LAND_MANAGEMENT,
        max: 5,
        green: 0,
        blue: 2,
        red: 3,
        black: 0,
    },

    // Energy Production
    CO2Capture: {
        name: "CO2 Capture",
        category: ENERGY_PRODUCTION,
        max: 20,
        green: 0,
        blue: 2,
        red: 4,
        black: 0,
    },
    HydrogenCars: {
        name: "Hydrogen-Fueled Cars",
        category: ENERGY_PRODUCTION,
        max: 5,
        green: 0,
        blue: 1,
        red: 1,
        black: 5,
    },
    BiofuelCars: {
        name: "Biofueled Cars & Trucks",
        category: ENERGY_PRODUCTION,
        max: 3,
        green: 0,
        blue: 2,
        red: 3,
        black: 3,
    },
    MixWood: {
        name: "Mix In Wood in Coal Plants",
        category: ENERGY_PRODUCTION,
        max: 10,
        green: 0,
        blue: 2,
        red: 4,
        black: 4,
    },
    SolarPanels: {
        name: "Solar Panels on Rooftops",
        category: ENERGY_PRODUCTION,
        max: 10,
        green: 0,
        blue: 1,
        red: 2,
        black: 7,
    },
    ReplaceCoalGas: {
        name: "Replace Coal with Natural Gas Power Plants",
        category: ENERGY_PRODUCTION,
        max: 5,
        green: 0,
        blue: 1,
        red: 2,
        black: 0,
    },
    ReplaceCoalNuclear: {
        name: "Replace Coal with Nuclear Power Plants",
        category: ENERGY_PRODUCTION,
        max: 20,
        green: 0,
        blue: 3,
        red: 6,
        black: 10,
    },
    ReplaceCoalSolar: {
        name: "Replace Coal with Solar Energy Power Plants",
        category: ENERGY_PRODUCTION,
        max: 20,
        green: 0,
        blue: 1,
        red: 1,
        black: 10,
    },
    ReplaceCoalWind: {
        name: "Replace Coal with Wind Farms",
        category: ENERGY_PRODUCTION,
        max: 10,
        green: 0,
        blue: 2,
        red: 4,
        black: 10,
    },

    // Energy Efficiency
    Geothermal: {
        name: "Geothermal Heating & Cooling",
        category: ENERGY_EFFICIENCY,
        max: 4,
        green: 0,
        blue: 3,
        red: 6,
        black: 5,
    },
    Insulation: {
        name: "Improve Insulation",
        category: ENERGY_EFFICIENCY,
        max: 15,
        green: 0,
        blue: 10,
        red: 20,
        black: 10,
    },
    CarMPG: {
        name: "Increase Car MPG",
        category: ENERGY_EFFICIENCY,
        max: 12,
        green: 0,
        blue: 5,
        red: 10,
        black: 10,
    },
    TruckMPG: {
        name: "Increase Truck MPG",
        category: ENERGY_EFFICIENCY,
        max: 10,
        green: 0,
        blue: 4,
        red: 7,
        black: 10,
    },
    FilteringWindows: {
        name: "Install Sunlight Filtering Windows",
        category: ENERGY_EFFICIENCY,
        max: 5,
        green: 0,
        blue: 3,
        red: 6,
        black: 3,
    },
    RideTrain: {
        name: "Ride Train Instead of Driving or Flying",
        category: ENERGY_EFFICIENCY,
        max: 4,
        green: 0,
        blue: 6,
        red: 12,
        black: 10,
    },
    ComputersTV: {
        name: "Turn off Computers and TVs",
        category: ENERGY_EFFICIENCY,
        max: 4,
        green: 0,
        blue: 4,
        red: 8,
        black: 5,
    },
    CFLLightbulbs: {
        name: "Use CFL Lightbulbs",
        category: ENERGY_EFFICIENCY,
        max: 4,
        green: 0,
        blue: 8,
        red: 16,
        black: 10,
    },
};

export default OPTIONS;
