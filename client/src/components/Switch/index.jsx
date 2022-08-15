import React from "react";
import "./Switch.css";

const Switch = ({
    isChecked = false,
    onClick = () => { }
}) => {
    return (
        <>
            <label className="switch">
                <input type="checkbox" checked={isChecked} onChange={onClick} />
                <span className="slider round"></span>
            </label>
        </>
    );
};

export default Switch;
