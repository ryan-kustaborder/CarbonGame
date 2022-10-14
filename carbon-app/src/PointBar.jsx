import React from "react";
import { useRef, useEffect } from "react";

export default function PointBar(props) {
    const containerRef = useRef(null);
    const greenRef = useRef(null);
    const blueRef = useRef(null);
    const redRef = useRef(null);
    const blackRef = useRef(null);

    useEffect(() => {
        let ratio = 0.1;
        let con =
            (props.Control.green * 2 +
                props.Control.blue * 3 +
                props.Control.red * 10 +
                props.Control.black * 1) *
            props.Control.max *
            0.1;
        console.log(con);
        containerRef.current.style.width = con + "px";

        let green = props.Control.green * props.Points * ratio * 2;
        greenRef.current.style.width = green + "px";

        let blue = props.Control.blue * props.Points * ratio * 3;
        blueRef.current.style.width = blue + "px";

        let red = props.Control.red * props.Points * ratio * 10;
        redRef.current.style.width = red + "px";

        let black = props.Control.black * props.Points * ratio * 1;
        blackRef.current.style.width = black + "px";
    }, [props]);

    return (
        <div className="points" ref={containerRef}>
            <div className="green" ref={greenRef}></div>
            <div className="blue" ref={blueRef}></div>
            <div className="red" ref={redRef}></div>
            <div className="black" ref={blackRef}></div>
        </div>
    );
}
