import React, { useState } from 'react'
import DownArrow from "../assets/DownArrow";

function Filter({
    lable = null,
    heading = "",
    optionList = [],
    selected = () => { },
    setselected = () => { }
}) {
    const [isopen, setisopen] = useState(false);
    return (
        <div className='flex justify-between space-x-1 items-center text-lg font-normal'>
            {lable !== null && <p className='text-gray-5'>{lable} :</p>}
            <div className='filter text-black cursor-pointer relative'>
                {!isopen && <p onClick={() => {
                    setisopen(!isopen)
                }} className='flex justify-between items-center space-x-3'>
                    <span>{heading}</span>
                    <DownArrow />
                </p>}
                {isopen &&
                    <div onClick={(e) => {
                        setselected(e.target.innerText);
                        setisopen(!isopen)
                    }} className="relative">
                        {optionList.map((opt, id) => {
                            return <p key={id}>{opt}</p>
                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default Filter;
