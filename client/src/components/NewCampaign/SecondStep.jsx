import React, { useState, useEffect } from 'react';
import ChecKInCircle from "../../assets/CheckInCircle";
import tickInCircleIcon from "../../assets/tick-circle.svg";
import endPoints from '../../api/endPoints';

function SecondStep({
    nextStep,
    setPoster,
    setName
}) {
    const [selected, setselected] = useState(0);
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch(endPoints.getAllProduct)
            .then(resp => resp.json())
            .then(result => {
                setdata(result.Product);
            })
    }, []);
    return (
        <div>
            <div className='mt-5 bg-white h-[400px] rounded-lg border bnorder-[#DAE6FF]'>
                <div className='py-2 mt-3 mx-5 border-b-[1.5px] border-[#EAEAEA]'>
                    <span className='text-lg font-bold'>Choose the Product </span>
                    <span className='text-base font-normal text-gray-5'>(Step 2 of 4)</span>
                </div>

                <div className='ml-5 mt-5 grid grid-cols-3 gap-5'>
                    {data.map((item, id) => {
                        return (
                            <div key={id} onClick={() => {
                                setselected(id);
                                setName(item.heading);
                                setPoster(item.icon);
                            }}
                                className={`flex justify-between items-center w-[380px] h-[80px] cursor-pointer rounded-lg border-[1.5px] border-[#F3F3F3] px-3 ${selected === id && "selected-plateform"}`}>
                                <div
                                    className={`flex justify-start space-x-5 items-center`}>
                                    <div>
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <div>
                                        <p className='text-lg font-semiBold text-[#0B1A33]'>
                                            {item.heading}
                                        </p>
                                        <p className='text-[13px] font-normal text-gray-5'>
                                            {item.subheading}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    {selected === id ? <ChecKInCircle w={24} h={24} color="#0F6EFF" /> :
                                        <img src={tickInCircleIcon} alt="" />
                                    }
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
            <div className='mt-5 flex justify-end items-center'>
                <button className='bg-button text-white text-lg font-semiBold rounded-md px-14 py-2' onClick={nextStep}>Continue</button>
            </div>
        </div>
    )
}

export default SecondStep;
