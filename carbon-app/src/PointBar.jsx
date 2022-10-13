import React from "react";
import { useRef, useEffect } from "react";

export default function PointBar(props) {
    const containerRef = useRef(null);
    const greenRef = useRef(null);
    const blueRef = useRef(null);
    const redRef = useRef(null);
    const blackRef = useRef(null);

    useEffect(() => {
        let ratio = containerRef.current.offsetWidth / props.Max;

        let green = props.Green * props.Points * ratio * 2;
        greenRef.current.style.width = green + "px";

        let blue = props.Blue * props.Points * ratio * 3;
        blueRef.current.style.width = blue + "px";

        let red = props.Red * props.Points * ratio * 10;
        redRef.current.style.width = red + "px";

        let black = props.Black * props.Points * ratio * 1;
        blackRef.current.style.width = black + "px";
    }, [props.Points]);

    return (
        <div className="points" ref={containerRef}>
            <div className="green" ref={greenRef}></div>
            <div className="blue" ref={blueRef}></div>
            <div className="red" ref={redRef}></div>
            <div className="black" ref={blackRef}></div>
        </div>
    );
}
