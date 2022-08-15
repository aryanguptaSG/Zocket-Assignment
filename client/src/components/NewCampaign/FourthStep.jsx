import React, { useState } from 'react';
import ChecKInCircle from "../../assets/CheckInCircle";
import thumbIcon from "../../assets/thumb.svg";



function FourthStep({
    nextStep
}) {
    const [selected, setselected] = useState(0);
    const data = ["./images/preview1.svg", "./images/preview2.svg", "./images/preview3.svg", "./images/preview4.svg"];
    return (
        <div className='mb-5'>
            <div className='mt-5 bg-white h-[490px] rounded-lg border bnorder-[#DAE6FF]'>
                <div className='py-2 mt-3 mx-5 border-b-[1.5px] border-[#EAEAEA]'>
                    <span className='text-lg font-bold'>Ready to go </span>
                    <span className='text-base font-normal text-gray-5'>(Step 4 of 4)</span>
                </div>

                <div className='ml-5 mt-5 grid grid-cols-4 gap-5'>
                    {data.map((item, id) => {
                        return (
                            <div key={id}
                                onClick={() => {
                                    setselected(id);
                                }}
                                className={`p-5 relative cursor-pointer w-[288px] h-[350px] rounded-lg border-[1.5px] border-[#F3F3F3]  px-3 ${selected === id && "selected-plateform h-[390px]"}`}>
                                <div className='flex justify-start items-center space-x-3'>
                                    <img src={"./images/hero.svg"} alt="" />
                                    <div>
                                        <p className='text-lg text-[#2B23A5] font-semiBold'>Mukund Cake Shop</p>
                                        <p className='text-xs text-[#767676]'>Sponsored</p>
                                    </div>
                                </div>

                                <p className='text-base text-[#000000] font-normal mt-4'>We are the best bakery around you. Please like my page to get updates on exciting offers and discounts</p>

                                <div className='mt-3'>
                                    <img src={item} alt="" />
                                    <div className='flex justify-around items-center bg-[#F5F5F5] w-[252px] py-1'>
                                        <p className='w-8/12 text-[11px] text-[#2B23A5]'>Mukund Cake Shop</p>
                                        <div className='flex justify-between items-center border border-[#CED0D4] py-[1px] px-2'>
                                            <img src={thumbIcon} alt="" />
                                            <p className='text-[10px] text-[#4B4F56]'>Like</p>
                                        </div>
                                    </div>
                                </div>

                                {selected === id &&
                                    <div className='flex justify-between items-center w-[252px] mt-3 space-x-3'>
                                        <div className='bg-lightBlue rounded-[5px] text-small font-semiBold text-[#0F6EFF] p-2 text-center w-1/2'>
                                            Change image
                                        </div>
                                        <div className='bg-lightBlue rounded-[5px] text-small font-semiBold text-[#0F6EFF] p-2 text-center w-1/2'>
                                            Edit text
                                        </div>
                                    </div>
                                }

                                {selected === id && <div className='absolute top-[-10px] right-[-10px] bg-white'>
                                    <ChecKInCircle w={24} h={24} color="#0F6EFF" />
                                </div>}
                            </div>
                        );
                    })}
                </div>



            </div>
            <div className='mt-5 flex justify-end items-center'>
                <button className='bg-button text-white text-lg font-semiBold rounded-md px-14 py-2' onClick={nextStep}>Start campaign</button>
            </div>
        </div>
    )
}

export default FourthStep;
