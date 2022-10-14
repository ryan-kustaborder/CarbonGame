import React from "react";
import PointBar from "./PointBar";
import Slider from "./Slider";

export default function Option(props) {
    return (
        <div className="Option">
            <label>{props.Control.name}</label>
            <div className="Tons">
                <p className="green">{props.Control.green}</p>
                <p className="blue">{props.Control.blue}</p>
                <p className="red">{props.Control.red}</p>
                <p className="black">{props.Control.black}</p>
            </div>
            <Slider
                Name={props.Control.name}
                Value={props.Value}
                Min={0}
                Control={props.Control}
                OnChange={props.SetValue}
            />
            <PointBar Points={props.Value} Control={props.Control} />
            <div className="PPU">
                <p className="green">{props.Control.green * 2}</p>
                <p className="blue">{props.Control.blue * 3}</p>
                <p className="red">{props.Control.red * 10}</p>
                <p className="black">{props.Control.black * 1}</p>
            </div>
        </div>
    );
}
