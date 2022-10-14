import React, { useRef, useEffect } from "react";
import "./Slider.scss";
import "@yaireo/ui-range";

export default function Slider(props) {
    const iconRef = useRef(null);
    const divRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.update = (e) => {
            props.OnChange(e.target.value);

            let w = inputRef.current.offsetWidth;

            let x = (e.target.value / props.Control.max) * w - 24;

            iconRef.current.style.left = x + "px";
        };

        let w = inputRef.current.offsetWidth;

        let x = (props.Value / props.Control.max) * w - 24;

        iconRef.current.style.left = x + "px";
    }, [props]);

    const icon = (
        <svg
            ref={iconRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50.2 29.4"
        >
            <polygon points="25.1,0.8 1.1,28.9 49.1,28.9 " />
            <text x="50%" y="70%" dominantBaseline="middle" textAnchor="middle">
                {props.Value}
            </text>
        </svg>
    );

    const ticks = [];

    for (let i = 0; i <= props.Control.max; i++) {
        ticks.push(<div key={props.Name + " = " + i}></div>);
    }

    return (
        <div className="Slider" ref={divRef}>
            <input
                ref={inputRef}
                title={props.Name}
                type="range"
                value={props.Value}
                onChange={(e) => {
                    inputRef.update(e);
                }}
                min={0}
                max={props.Control.max}
            ></input>
            {icon}
            <div className="ticks">{ticks}</div>
        </div>
    );
}
