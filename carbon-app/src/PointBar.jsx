import React from "react";
import { useRef, useEffect } from "react";
import {
    ENERGY_EFFICIENCY,
    ENERGY_PRODUCTION,
    LAND_MANAGEMENT,
} from "./Options";

export default function PointBar(props) {
    // Create refs for DOM elements
    const containerRef = useRef(null);
    const greenRef = useRef(null);
    const blueRef = useRef(null);
    const redRef = useRef(null);
    const blackRef = useRef(null);

    // Calculate the widths of each div

    let ratio;

    if (props.Option.category === ENERGY_EFFICIENCY) {
        ratio = window.innerWidth / 3 / 3600;
    } else if (props.Option.category === ENERGY_PRODUCTION) {
        ratio = window.innerWidth / 3 / 1580;
    } else if (props.Option.category === LAND_MANAGEMENT) {
        ratio = window.innerWidth / 3 / 2970;
    }
    let container =
        (props.Option.green * 2 +
            props.Option.blue * 3 +
            props.Option.red * 10 +
            props.Option.black * 1) *
        props.Option.max *
        ratio;

    let green = props.Option.green * props.Points * ratio * 2;
    let blue = props.Option.blue * props.Points * ratio * 3;
    let red = props.Option.red * props.Points * ratio * 10;
    let black = props.Option.black * props.Points * ratio * 1;

    let value = parseInt((green + blue + red + black) / ratio);

    // Once ready, set the widths of each category section
    useEffect(() => {
        containerRef.current.style.width = container + "px";
        greenRef.current.style.width = green + "px";
        blueRef.current.style.width = blue + "px";
        redRef.current.style.width = red + "px";
        blackRef.current.style.width = black + "px";
    });

    // Generate range tick divs
    const ticks = [];
    let max =
        (props.Option.green * 2 +
            props.Option.blue * 3 +
            props.Option.red * 10 +
            props.Option.black * 1) *
        props.Option.max;

    for (let i = 0; i <= max; i += 100) {
        ticks.push(<div key={props.Name + " = " + i}></div>);
    }

    return (
        <div className="PointBar" ref={containerRef}>
            <div className="green" ref={greenRef}></div>
            <div className="blue" ref={blueRef}></div>
            <div className="red" ref={redRef}></div>
            <div className="black" ref={blackRef}></div>
            <div className="ticks">{ticks}</div>
            <p className="min">0</p>
            <p className="max">{max}</p>
            <p className="value">Points {value}</p>
        </div>
    );
}
