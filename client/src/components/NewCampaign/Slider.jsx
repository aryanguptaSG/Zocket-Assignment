import React, { useState } from 'react';
import flag from "../../assets/indianFlag.svg";

const Slider = ({
    label = "",
    min = 100,
    max = 10000,
    value = 10,
    isflag = false,
    setValue = () => { }
}) => {
    const [currvalue, setcurrvalue] = useState(value);
    return (
        <div>
            <div className='flex justify-between items-center'>
                <p className='text-small font-semiBold text-[#606060]'>{label} <span className='text-base font-semiBold text-[#606060]'>( {isflag ? "Rs." : "Km"} {currvalue} )</span> </p>
                {isflag && <img src={flag} alt="" />}
            </div>
            <input
                value={currvalue}
                onChange={(e) => {
                    setcurrvalue(e.target.value);
                    setValue(e.target.value);
                }}
                type="range" min={min} max={max} className="w-full mt-3 h-[5px] rounded-[5px]" />
            <div className='flex justify-between items-center text-small font-semiBold text-[#606060]'>
                <p>{min}</p>
                <p>{max}</p>
            </div>
        </div>
    );
}

export default Slider;
