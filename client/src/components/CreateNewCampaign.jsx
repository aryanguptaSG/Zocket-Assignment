import React from 'react'
import Header from './Header';
import Container from './NewCampaign/Container';

function CreateNewCampaign({
    hideCreateNewCampaign
}) {
    return (
        <div>
            <Header heading='Your Ad Campaign' subHeading='Launch your ad in just 4 easy steps' />

            <div className='px-10'>
                <Container hideCreateNewCampaign={hideCreateNewCampaign} />
            </div>
        </div>
    )
}

export default CreateNewCampaign;

