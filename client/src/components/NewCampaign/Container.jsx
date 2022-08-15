import React, { useState } from 'react'
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import Header from "./Header";
import endPoints from '../../api/endPoints';

function Container({
    hideCreateNewCampaign
}) {
    const [step, setstep] = useState(1);
    const [Name, setName] = useState("");
    const [Poster, setPoster] = useState("");
    const [StartDate, setStartDate] = useState("");
    const [EndDate, setEndDate] = useState("");
    const [Budget, setBudget] = useState("300");
    const [Location, setLocation] = useState("");
    const [PlateForm, setPlateForm] = useState("");

    const nextStep = () => {
        if (step < 4) {
            setstep(step + 1);
        }
        else {
            createNewCamopaign();
            setstep(1);
        }
    }

    const createNewCamopaign = () => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
        const currDate = `Created on ${new Date().getDate()} ${months[new Date().getMonth()]}`;

        const sd = new Date(StartDate);
        const start = `${sd.getDate()}${months[sd.getMonth()]}${sd.getFullYear()}`;

        const ed = new Date(EndDate);
        const end = `${ed.getDate()}${months[ed.getMonth()]}${ed.getFullYear()}`;

        const data = {
            "OnOff": 1,
            "Name": Name,
            "Poster": Poster,
            "CreateDate": currDate,
            "StartDate": start,
            "EndDate": end,
            "Clicks": 200,
            "Budget": `INR.${Budget}`,
            "Location": Location,
            "Plateform": PlateForm,
            "Status": "1"
        }

        fetch(endPoints.AddCampaign, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(resp => {
                hideCreateNewCampaign();
            })
    }
    return (
        <div>
            <Header step={step} setstep={setstep} />
            {
                step === 1 && <FirstStep nextStep={nextStep} setPlateForm={setPlateForm} />
            }
            {
                step === 2 && <SecondStep nextStep={nextStep} setPoster={setPoster} setName={setName} />
            }
            {
                step === 3 && <ThirdStep
                    nextStep={nextStep}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                    setBudget={setBudget}
                    setLocation={setLocation}
                    LocationValue={Location}
                />
            }
            {
                step === 4 && <FourthStep nextStep={nextStep} />
            }
        </div>
    )
}

export default Container;
