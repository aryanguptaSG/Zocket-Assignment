import React from 'react'

const Bullet = ({
    text = ""
}) => {
    return (
        <div className='text-white p-1 w-[24px] h-[24px] rounded-full bg-[#0F6EFF] flex justify-center items-center'>
            {text}
        </div>
    );
}

export default Bullet
