import React, { useEffect, useState } from 'react'
import searchIcon from "../assets/search-normal.svg";
import Filter from './Filter';
import CampaignTable from './CampaignTable';
import endPoints from '../api/endPoints';
import filter from '../Utils/filter';

function AllCampaignTable() {
    const [defaultData, setdefaultData] = useState([]);
    const [allCampaign, setallCampaign] = useState([]);
    const [selectedPlateform, setselectedPlateform] = useState("All Platform");
    const [selectedStatus, setselectedStatus] = useState("All Status");
    const [searchkeyWord, setsearchkeyWord] = useState("");
    const [update, setupdate] = useState(true);

    const refreshData = () => {
        setupdate(!update);
    }

    useEffect(() => {
        const newdata = filter(defaultData, searchkeyWord, selectedPlateform, selectedStatus);
        setallCampaign(newdata);
    }, [defaultData, searchkeyWord, selectedPlateform, selectedStatus])

    useEffect(() => {
        fetch(endPoints.getAllCampaign)
            .then(resp => resp.json())
            .then(result => {
                setallCampaign(result.campaign);
                setdefaultData(result.campaign);
            })
    }, [update])

    return (
        <div className='min-h-[590px] all-campaign px-7'>
            <div className='h-[70px] flex justify-between items-center'>
                <div className='search-input-box flex justify-start items-center'>
                    <img src={searchIcon} alt="" />
                    <input onChange={(e) => { setsearchkeyWord(e.target.value) }} value={searchkeyWord} type="text" className='search-input' placeholder='Search for the campaign' />
                </div>
                <div className='flex justify-between items-center space-x-3'>
                    <Filter optionList={["All Platform", "Google", "Youtube", "Facebook"]} lable='Platform' heading={selectedPlateform} selected={selectedPlateform} setselected={setselectedPlateform} />
                    <Filter optionList={["All Status", "Live", "Paused", "Exhausted"]} lable='Status' heading={selectedStatus} selected={selectedStatus} setselected={setselectedStatus} />
                    <Filter optionList={["Last 30 days", "Last 20 days"]} heading='Last 30 days' />
                </div>
            </div>

            <div className='max-h-[500px] overflow-scroll'>
                <CampaignTable allCampaign={allCampaign} refreshData={refreshData} />
            </div>

        </div>
    )
}

export default AllCampaignTable;
