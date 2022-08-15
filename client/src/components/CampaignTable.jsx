import React from 'react'
import CapmpaignTr from './CapmpaignTr';
import CheckBox from './CheckBox';

function CampaignTable({
    allCampaign,
    refreshData
}) {
    return (
        <table className='campaign-table'>
            <thead>
                <tr>
                    <td><CheckBox /></td>
                    <td>On/Off</td>
                    <td>Campaign </td>
                    <td>Date Range</td>
                    <td>Clicks</td>
                    <td>Budget</td>
                    <td>Location</td>
                    <td>Platform</td>
                    <td>Status</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    allCampaign.map((item, id) => {
                        return (
                            <CapmpaignTr row={item} key={id} refreshData={refreshData} />
                        );
                    })
                }
            </tbody>
        </table>
    )
}

export default CampaignTable;

