import React from 'react'

const ToggleTab = ({
    label = "",
    option1 = "",
    option2 = "",
    selected = 1,
    settab = (text) => { }
}) => {
    return (
        <div>
            <p className='text-[#606060] text-small font-semiBold'>{label}</p>
            <div className='mt-2 w-[229px] h-[39px] flex justify-between items-center rounded-[47.0588px] bg-[#F0F0F0] cursor-pointer text-[#999999] text-base font-semiBold'>
                <div
                    onClick={() => {
                        settab(1)
                    }}
                    className={`${selected === 1 && "selected-tab"} w-1/2 text-center`}>{option1}</div>
                <div
                    onClick={() => {
                        settab(2)
                    }}
                    className={`${selected === 2 && "selected-tab"} w-1/2 text-center`}>{option2}</div>
            </div>
        </div>
    );
}

export default ToggleTab
