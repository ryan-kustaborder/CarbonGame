import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

// Clamp number between two values with the following line:
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export default function ProgressBar(props) {
    // Create refs for DOM elements
    const outer = useRef(null);
    const inner = useRef(null);

    // Once ready, set the inner div to correct size
    useEffect(() => {
        if (props.Direction === "horizontal") {
            let w = outer.current.offsetWidth;

            let x = (props.Value * w) / props.Max;

            x = clamp(x, 0, outer.current.offsetWidth);

            inner.current.style.width = x + "px";
        } else {
            let h = outer.current.offsetHeight;

            let y = (props.Value * h) / props.Max;

            y = clamp(y, 0, outer.current.offsetHeight);

            inner.current.style.height = y + "px";
        }
    }, [props]);

    const color = props.Value > props.Max ? "red" : "";

    const classStyle = "ProgressBar " + props.Direction + " " + color;

    return (
        <div className={classStyle} ref={outer}>
            <p className="label">{props.Label}</p>
            <div ref={inner}></div>
            <p className="max">{props.Max}</p>
            <p className="value">{props.Value}</p>
        </div>
    );
}
