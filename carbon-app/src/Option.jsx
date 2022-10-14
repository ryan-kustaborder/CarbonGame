import React from "react";
import PointBar from "./PointBar";
import Slider from "./Slider";

export default function Option(props) {
    return (
        <div className="Option">
            <label>{props.Option.name}</label>
            <div className="Tons">
                <p className="green">{props.Option.green}</p>
                <p className="blue">{props.Option.blue}</p>
                <p className="red">{props.Option.red}</p>
                <p className="black">{props.Option.black}</p>
            </div>
            <Slider
                Name={props.Option.name}
                Value={props.Value}
                Min={0}
                Option={props.Option}
                OnChange={props.SetValue}
            />
            <PointBar Points={props.Value} Option={props.Option} />
            <div className="PPU">
                <p className="green">{props.Option.green * 2}</p>
                <p className="blue">{props.Option.blue * 3}</p>
                <p className="red">{props.Option.red * 10}</p>
                <p className="black">{props.Option.black * 1}</p>
            </div>
        </div>
    );
}
