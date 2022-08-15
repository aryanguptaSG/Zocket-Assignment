const filter = (data, keyword, plateform, status) => {
    if (keyword.length > 0) {
        let newdata = [];
        for (let i in data) {
            if (data[i].Name.toLowerCase().startsWith(keyword.toLowerCase())) {
                newdata.push(data[i]);
            }
        }
        data = newdata;
    }

    if (plateform !== "All Platform") {
        let newdata = [];
        for (let i in data) {
            if (data[i].PlateForm.toLowerCase().includes(plateform.toLowerCase())) {
                newdata.push(data[i]);
            }
        }
        data = newdata;
    }

    if (status !== "All Status") {
        let newdata = [];
        for (let i in data) {
            if ((data[i].Status === "1" && status === "Live") || (data[i].Status === "0" && status === "Paused") || (data[i].Status === "-1" && status === "Exhausted")) {
                newdata.push(data[i]);
            }
        }
        data = newdata;
    }
    return data;
}


export default filter;