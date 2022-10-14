import React from "react";
import PointBar from "./PointBar";
import Slider from "./Slider";

export default function Control(props) {
    return (
        <div className="treatment">
            <Slider
                Name={props.Control.name}
                Value={props.Value}
                Min={0}
                Control={props.Control}
                OnChange={props.SetValue}
            />
            <PointBar Points={props.Value} Control={props.Control} />
        </div>
    );
}
