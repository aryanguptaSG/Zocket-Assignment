import React, { useState, useEffect } from 'react'
import CheckBox from './CheckBox';
import editIcon from "../assets/edit-2.svg";
import deleteIcon from "../assets/trash.svg";
import Switch from "../components/Switch";
import endPoints from '../api/endPoints';


function CapmpaignTr({
    row,
    refreshData
}) {
    const [isChecked, setisChecked] = useState(row.OnOff === "1");
    const [update, setupdate] = useState(true);
    const switchClicked = () => {
        setisChecked(!isChecked);
        setupdate(!update);
        refreshData();
    }
    useEffect(() => {
        fetch(endPoints.updateCampaign, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": row.id,
                "OnOff": isChecked ? "1" : "0",
                "Status": isChecked ? "1" : "0"
            }),
        })
    }, [update])

    const deleteCampaign = () => {
        fetch(endPoints.deleteCampaign, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": row.id
            }),
        }).then(resp => {
            refreshData();
        })
    }


    return (
        <tr>
            <td><CheckBox /></td>
            <td>
                <Switch isChecked={isChecked} onClick={switchClicked} />
            </td>
            <td>
                <div className='flex justify-start space-x-1 items-center'>
                    <img src={row.Poster} alt="poster" />
                    <div>
                        <p className='font-semiBold text-base'>{row.Name}</p>
                        <p className='text-small font-normal text-gray-6'>{row.CreateDate}</p>
                    </div>
                </div>
            </td>
            <td className='text-base font-normal'>{row.StartDate} - {row.EndDate}</td>
            <td className='text-base font-normal'>{row.Clicks}</td>
            <td className='text-base font-normal'>{row.Budget}</td>
            <td className='text-base font-normal'>{row.Location}</td>
            <td>
                <img src={row.PlateForm} alt="icon" />
            </td>
            <td>
                {row.Status === "1" && <div className='bg-live text-base font-semiBold text-live text-center rounded-2xl relative right-3 p-[1px]'>
                    Live Now
                </div>}
                {row.Status === "0" && <div className='bg-paused text-base font-semiBold text-paused text-center rounded-2xl relative right-3 p-[1px]'>
                    Paused
                </div>}
                {row.Status === "-1" && <div className='bg-exhausted text-base font-semiBold text-exhausted text-center rounded-2xl relative right-3 p-[1px]'>
                    Exhausted
                </div>}
            </td>
            <td>
                <div className='flex justify-start items-center space-x-3'>
                    <img src={editIcon} alt="edit icon" className='cursor-pointer' />
                    <img onClick={deleteCampaign} src={deleteIcon} alt="delete icon" className='cursor-pointer' />
                </div>
            </td>
        </tr>
    )
}

export default CapmpaignTr;
