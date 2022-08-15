// All The Imports----------------------------------------------
const express = require("express");
const app = express()
const server = require("http").Server(app)
const mysql = require('mysql');
const cors = require("cors");




// connecting with database---------------------------------------
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "zocket"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});



//All the middlewire----------------------------------------------
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


//starting the server----------------------------------------------
server.listen(3001, () => { console.log("Server is listening at 3001 port.") })



app.get("/get-all-campaign", (req, res) => {
    con.query("SELECT * FROM CampaignList", (err, response) => {
        res.status(200).json({ campaign: response })
    })
})


//INSERT INTO `CampaignList` (`id`, `OnOff`, `Name`, `Poster`, `CreateDate`, `StartDate`, `EndDate`, `Clicks`, `Budget`, `Location`, `PlateForm`, `Status`) VALUES ('1', '1', 'Bluberry cake Campaign', './images/pre1.svg', 'Created on 14 july\r\n', '25jul-2020', '1Aug-2020', '300', 'INR.3,400', 'Chennai', './images/facebook.svg', '1')


app.post("/create-new-campaign", (req, res) => {
    const data = req.body;
    const query = `INSERT INTO CampaignList (id, OnOff, Name, Poster, CreateDate, StartDate, EndDate, Clicks, Budget, Location, PlateForm, Status) VALUES (NULL, '${data.OnOff}', '${data.Name}', '.${data.Poster}', '${data.CreateDate}', '${data.StartDate}', '${data.EndDate}', '${data.Clicks}', '${data.Budget}', '${data.Location}', '${data.Plateform}', '${data.Status}')`;
    con.query(query, (err, response) => {
        if (err) throw err;
    })
    res.status(200).json({ message: "Created" })
})


app.put("/update-campaign", (req, res) => {
    const query = `UPDATE CampaignList SET OnOff='${req.body.OnOff}', Status='${req.body.Status}' WHERE id='${req.body.id}'`;
    con.query(query, (err, response) => {
        if (err) throw err;
    })
    res.status(200).json({ message: req.body });
})

app.put("/update-all", (req, res) => {
    const query = `UPDATE CampaignList SET OnOff='${req.body.On}'`;
    con.query(query, (err, response) => {
        if (err) throw err;
    })
    res.status(200).json({ message: req.body });
})


app.delete("/delete-campaign", (req, res) => {
    const query = `DELETE FROM CampaignList WHERE id='${req.body.id}'`;
    con.query(query, (err, response) => {
        if (err) throw err;
        res.status(200).json({ message: `${req.body.id} deleted!` })
    })
})



app.get("/get-all-product", (req, res) => {
    con.query("SELECT * FROM ProductList", (err, response) => {
        res.status(200).json({ Product: response })
    })
})

app.post("/add-product", (req, res) => {
    const data = req.body;
    const query = `INSERT INTO ProductList (id, icon, heading, subheading) VALUES (NULL, '${data.icon}', '${data.heading}', '${data.subheading}')`;
    con.query(query, (err, response) => {
        if (err) throw err;
    })
    res.status(200).json({ message: "Created" })
})