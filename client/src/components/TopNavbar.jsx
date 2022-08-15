import React from 'react'
import languageChangeIcon from "../assets/changeLang.svg";
import notificationIcon from "../assets/notification.svg";
import giftIcon from "../assets/gift.svg";
import coinIcon from "../assets/coin.svg";
import buyPlan from "../assets/buyPlan.svg";
import DownArrow from '../assets/DownArrow';

const TopNavbar = () => {
    return (
        <div className='bg-white min-h-[60px] flex justify-end items-center px-10 space-x-5 border border-[#DAE6FF]'>
            <p className='text-small font-normal text-gray-6'>Free trial ends in 2 days</p>
            <img src={buyPlan} alt="" />
            <img src={giftIcon} alt="" />
            <img src={notificationIcon} alt="" />
            <div className='flex justify-center items-center space-x-2 cursor-pointer'>
                <img src={coinIcon} alt="" />
                <p className='text-base font-normal text-[#1B3F67]'>Mukund cake shop</p>
                <DownArrow w={5} h={5} color={"#1B3F67"} />
            </div>
            <img src={languageChangeIcon} alt="" />
        </div>
    )
}

export default TopNavbar;
