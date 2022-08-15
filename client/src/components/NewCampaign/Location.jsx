import React from 'react';
import LoactionIcon from "../../assets/location.svg";


const Location = ({
    label = "",
    className = "",
    value = "",
    setValue
}) => {
    return (
        <div className={className}>
            <p className='text-[#606060] text-small font-semiBold'>{label}</p>
            <div className='border border-gray mt-1 rounded-lg flex justify-between items-center px-5'>
                <input
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    value={value} type="text" className='w-full h-full py-2 outline-none border-none' placeholder='Select a place name, address or coordinates' />
                <img src={LoactionIcon} alt="" />
            </div>
        </div>
    );
}

export default Location
