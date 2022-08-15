import React from 'react'
import plucInCircleIcon from "../assets/plusincircle.svg";

function Header({
    heading = "",
    subHeading = "",
    isButtonVissile = false,
    setisNewCampaignVisible = null
}) {
    return (
        <div className='px-10 min-h-[100px]  flex justify-between items-center'>
            <div>
                <p className='text-xl text-black font-bold'>{heading}</p>
                <p className='text-lg text-gray-5 font-normal'>{subHeading}</p>
            </div>
            <div className='flex justify-between items-end min-h-[80px]'>
                {isButtonVissile && <button
                    onClick={setisNewCampaignVisible}
                    className='flex justify-between items-center bg-button rounded-lg text-white px-3 py-2 space-x-1'>
                    <img src={plucInCircleIcon} alt="" />
                    <p className='text-lg font-normal'>Create new campaign</p>
                </button>}
            </div>
        </div>
    )
}

export default Header;
