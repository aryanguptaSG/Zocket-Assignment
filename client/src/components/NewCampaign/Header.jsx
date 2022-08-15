import React from 'react'
import lampCharg from "../../assets/lamp-charge.svg";
import BagBold from "../../assets/Bagbold";
import CampaignSettingIcon from "../../assets/CampaignSettingIcon";
import CheckInCircle from "../../assets/CheckInCircle";

function Header({
    step = 1,
    setstep = null
}) {
    const completed = "text-[#0B1A33] text-lg font-semiBold";
    const notCompleted = "text-[#ABB6C5] text-base font-normal";
    return (
        <div className='px-10 flex justify-between items-center'>
            <div
                onClick={() => {
                    setstep(1);
                }}
                className='cursor-pointer flex flex-col items-center'>
                <div className={`flex justify-center items-center w-[62px] h-[62px] rounded-full ${step >= 1 ? "bg-[#F29A2E]" : "bg-[#E4EAF2]"}`}>
                    <img src={lampCharg} alt="" />
                </div>
                <p className={step >= 1 ? completed : notCompleted}>What you want to do</p>
            </div>

            <div
                onClick={() => {
                    setstep(2);
                }}
                className=' cursor-pointer flex flex-col items-center'>
                <div className={`flex justify-center items-center w-[62px] h-[62px] rounded-full ${step >= 2 ? "bg-[#F29A2E]" : "bg-[#E4EAF2]"}`}>
                    <BagBold color={`${step >= 2 ? "#FFF" : "#ABB5C2"}`} />
                </div>
                <p className={step >= 2 ? completed : notCompleted}>Choose product</p>
            </div>

            <div
                onClick={() => {
                    setstep(3);
                }}
                className='cursor-pointer flex flex-col items-center'>
                <div className={`flex justify-center items-center w-[62px] h-[62px] rounded-full ${step >= 3 ? "bg-[#F29A2E]" : "bg-[#E4EAF2]"}`}>
                    <CampaignSettingIcon color={`${step >= 3 ? "#FFF" : "#ABB5C2"}`} />
                </div>
                <p className={step >= 3 ? completed : notCompleted}>Campaign settings</p>
            </div>

            <div
                onClick={() => {
                    setstep(4);
                }}
                className='cursor-pointer flex flex-col items-center'>
                <div className={`flex justify-center items-center w-[62px] h-[62px] rounded-full ${step >= 4 ? "bg-[#F29A2E]" : "bg-[#E4EAF2]"}`}>
                    <CheckInCircle color={`${step >= 4 ? "#FFF" : "#ABB5C2"}`} />
                </div>
                <p className={step >= 4 ? completed : notCompleted}>Ready to go</p>
            </div>
        </div>
    )
}

export default Header;
