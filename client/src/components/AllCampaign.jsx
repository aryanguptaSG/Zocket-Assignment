import React from 'react'
import AllCampaignTable from './AllCampaignTable';
import Header from './Header';

function AllCampaign({
    setisNewCampaignVisible
}) {
    return (
        <div>
            <Header heading='Your Campaigns' subHeading='Check the list of campigns you created' isButtonVissile={true} setisNewCampaignVisible={setisNewCampaignVisible} />

            <div className='px-10'>
                <AllCampaignTable />
            </div>
        </div>
    )
}

export default AllCampaign;
