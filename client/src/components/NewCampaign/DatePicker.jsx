import React from 'react'

const DatePicker = ({
    label = "",
    setValue = () => { }
}) => {
    return (
        <div>
            <p className='text-small font-semiBold text-[#606060]'>{label}</p>
            <div className='border border-gray mt-1 px-3 py-1 rounded-lg'>
                <input onChange={(e) => {
                    setValue(e.target.value);
                }} type="date" name="" id="" className='w-full outline-none border-none' />
            </div>
        </div>
    );
}

export default DatePicker
