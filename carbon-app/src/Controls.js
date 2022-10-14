const LAND_MANAGEMENT = "Land Management";

const CONTROLS = {
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
};

export default CONTROLS;
