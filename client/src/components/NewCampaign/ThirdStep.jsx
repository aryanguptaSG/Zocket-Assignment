import React, { useState } from 'react'
import Bullet from './Bullet';
import ToggleTab from './ToggleTab';
import DatePicker from "./DatePicker";
import Slider from './Slider';
import Location from './Location';


function ThirdStep({
    nextStep,
    setStartDate,
    setEndDate,
    setBudget,
    setLocation,
    LocationValue
}) {
    const [location, setlocation] = useState(1);
    return (
        <div className='relative h-[600px] mb-10'>
            <div className='mt-5 bg-white h-[600px] w-[900px] rounded-lg border bnorder-[#DAE6FF]'>
                <div className='py-2 mt-3 mx-5 border-b-[1.5px] border-[#EAEAEA]'>
                    <span className='text-lg font-bold'>Campaign Settings </span>
                    <span className='text-base font-normal text-gray-5'>(Step 3 of 4)</span>
                </div>

                <div className='mx-5 mt-7'>
                    <div className='flex justify-start items-center space-x-3 '>
                        <Bullet text='1' />
                        <p className='underline text-base font-semiBold'>Budget and dates info</p>
                    </div>

                    <div className='ml-3 mb-1 pl-8 h-[280px] mt-1 border-l-[1.5px] border-l-gray'>
                        <div>
                            <ToggleTab label="Budget Timeline" option1='Lifetime' option2='Daily' />
                        </div>
                        <div className='flex justify-between mt-5 space-x-10 w-10/12'>
                            <div className='w-1/2'>
                                <DatePicker label='Start date' setValue={setStartDate} />
                            </div>
                            <div className='w-1/2'>
                                <DatePicker label='End date' setValue={setEndDate} />
                            </div>
                        </div>

                        <div className='mt-5'>
                            <Slider label='Enter campaign budget' value={300} isflag={true} setValue={setBudget} />
                        </div>


                    </div>

                    <div>
                        <div className='flex justify-start items-center space-x-3 '>
                            <Bullet text='2' />
                            <p className='underline text-base font-semiBold'>Location info</p>
                        </div>
                    </div>

                    <div className='ml-3 mb-1 pl-8  mt-1'>
                        <div>
                            <ToggleTab heading="Location type" option1='location' option2='Radius' selected={location} settab={setlocation} />
                        </div>

                        {location === 1 && <Location className='mt-5' label='Select Location' value={LocationValue} setValue={setLocation} />}

                        {location === 2 && <div className='mt-5'>
                            <Slider label='Select target radius' min={1} max={30} />
                        </div>}

                    </div>
                </div>

            </div>
            <div className='absolute bottom-5 right-10 mt-5 flex justify-end items-center'>
                <button className='bg-button text-white text-lg font-semiBold rounded-md px-14 py-2' onClick={nextStep}>Continue</button>
            </div>
        </div>
    )
}

export default ThirdStep;
