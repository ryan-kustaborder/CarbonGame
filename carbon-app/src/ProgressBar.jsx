import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function ProgressBar(props) {
    const outer = useRef(null);
    const inner = useRef(null);

    useEffect(() => {
        if (props.Direction === "horizontal") {
            let w = outer.current.offsetWidth;

            let x = (props.Value * w) / props.Max;

            inner.current.style.width = x + "px";
        } else {
            let h = outer.current.offsetHeight;

            let y = (props.Value * h) / props.Max;

            inner.current.style.height = y + "px";
        }
    }, [props]);

    const classStyle = "ProgressBar " + props.Direction;

    return (
        <div className={classStyle} ref={outer}>
            <div ref={inner}></div>
            <p>{props.Value}</p>
        </div>
    );
}
