import React from 'react'
import logo from "../assets/logo.svg";
import house from "../assets/house.svg";
import campaign from "../assets/volume-high.svg";
import products from "../assets/bag.svg";
import customers from "../assets/profile-2user.svg";

const SideNavbar = ({
    hideCreateNewCampaign = null
}) => {
    return (
        <div className='bg-navbar-black min-h-full py-14 flex flex-col'>
            <div className='mb-[40px] flex flex-col items-center'>
                <img src={logo} alt="" />
            </div>
            <div className='space-y-1 text-xs text-white'>
                <div className='flex flex-col items-center p-3'>
                    <img src={house} alt="" />
                    <p>Home</p>
                </div>
                <div onClick={hideCreateNewCampaign} className='flex flex-col items-center p-3 active-nav-item cursor-pointer'>
                    <img src={campaign} alt="" />
                    <p>Campaign</p>
                </div>
                <div className='flex flex-col items-center  p-3'>
                    <img src={products} alt="" />
                    <p>Products</p>
                </div>
                <div className='flex flex-col items-center  p-3'>
                    <img src={customers} alt="" />
                    <p>Customers</p>
                </div>
            </div>
        </div>
    )
}

export default SideNavbar;
