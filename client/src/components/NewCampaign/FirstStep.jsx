import React, { useState } from 'react';
import PhoneIcon from "../../assets/PhoneIcon";
import MessageIcon from "../../assets/MessageIcon";
import PeopleIcon from "../../assets/PeopleIcon";
import IncreasePeopleIcon from "../../assets/IncreasePeopleIcon";
import EyeIcon from "../../assets/EyeIcon";
import GetTraficIcon from "../../assets/GetTraficIcon";
import DownloadIcon from "../../assets/DownloadIcon";
import SalesIcon from "../../assets/SalesIcon";
import TraficIcon from "../../assets/TraficIcon";
import ChecKInCircle from "../../assets/CheckInCircle";


function FirstStep({
    nextStep,
    setPlateForm
}) {
    const [selected, setselected] = useState(0);
    const data = [{
        icon: PhoneIcon,
        heading: "Get Leads as calls",
        subheading: "Reach broad audience and get leads through calls",
        plateform: "./images/google.svg"
    },
    {
        icon: MessageIcon,
        heading: "Get Leads as Facebook messages",
        subheading: "Get more FB messages from Leads",
        plateform: "./images/facebook.svg"
    },
    {
        icon: IncreasePeopleIcon,
        heading: "Increase page followers",
        subheading: "Encourage customers to follow your page",
        plateform: "./images/facebook.svg"
    },
    {
        icon: PeopleIcon,
        heading: "Get Customer Leads",
        subheading: "Encourage customers to take action",
        plateform: "./images/facebook.svg"
    },
    {
        icon: EyeIcon,
        heading: "Get more youtube views",
        subheading: "Increase organic views by obtaining user attention ",
        plateform: "./images/youtube.svg"
    },
    {
        icon: GetTraficIcon,
        heading: "Get more website traffic",
        subheading: "Get the right people to visit your website",
        plateform: "./images/facebook.svg"
    },
    {
        icon: TraficIcon,
        heading: "Increase Live store traffic",
        subheading: "Drive visits to local stores, restaurants & Dealerships",
        plateform: "./images/google.svg"
    },
    {
        icon: DownloadIcon,
        heading: "Increase your App installs",
        subheading: "Get more installs, interactions for your app",
        plateform: "./images/youtube.svg"
    },
    {
        icon: SalesIcon,
        heading: "Increase the catalogue sales",
        subheading: "Drive the sales of your catalogue and get more leads",
        plateform: "./images/google.svg"
    }
    ]
    return (
        <div>
            <div className='mt-5 bg-white h-[400px] rounded-lg border bnorder-[#DAE6FF]'>
                <div className='py-2 mt-3 mx-5 border-b-[1.5px] border-[#EAEAEA]'>
                    <span className='text-lg font-bold'>What you want to do? </span>
                    <span className='text-base font-normal text-gray-5'>(Step 1 of 4)</span>
                </div>

                <div className='ml-5 mt-5 grid grid-cols-3 gap-5'>
                    {data.map((item, id) => {
                        return (
                            <div key={id}
                                onClick={() => {
                                    setselected(id);
                                    setPlateForm(item.plateform);
                                }}
                                className={`relative cursor-pointer w-[380px] h-[80px] rounded-lg border-[1.5px] border-[#F3F3F3] flex justify-start space-x-5 items-center px-3 ${selected === id && "selected-plateform"}`}>
                                <div>
                                    <item.icon color={`${selected === id ? "#0F6EFF" : "#8B8B8B"}`} />
                                </div>
                                <div>
                                    <p className='text-lg font-semiBold text-[#0B1A33]'>
                                        {item.heading}
                                    </p>
                                    <p className='text-[13px] font-normal text-gray-5'>
                                        {item.subheading}
                                    </p>
                                </div>
                                {selected === id && <div className='absolute top-[-10px] right-[-10px] bg-white'>
                                    <ChecKInCircle w={24} h={24} color="#0F6EFF" />
                                </div>}
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

export default FirstStep;
