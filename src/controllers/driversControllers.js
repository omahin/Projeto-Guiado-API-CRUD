const drivers = require("../models/travels.json");
const fs = require("fs");
const utils = require("../utils/travelUtils");

const createDriver = (req, res) => {
    let {
        // id,
        name,
        license
    } = req.body;

    let requiredId = req.params.id;

    let newDriver = {
        "id": Math.random().toString(32).substr(2),
        name,
        license
    }

    const driverRequired = drivers.find(t => t.id == requiredId);

    drivers.forEach((driver) => {
        let sameId = driver === driverRequired
        if(sameId){
            driver.driverInfos.push(newDriver);
        };
    });

    res.status(200).send({
        "message": "Driver adicionado com sucesso",
        driverRequired
    });
};

const replaceDriver = (req, res) => {
    const requiredId = req.params.id;
    const {name,license} = req.body;

    let filteredDriver = utils.filterById(drivers, requiredId);
    // console.log(filteredDriver)

    const index = drivers.indexOf(filteredDriver);

    let newDriver = {
        id: requiredId,
        name,
        license
    };

    if(index >= 0) {
        drivers.splice(index, 1, newDriver)
        fs.writeFile("./src/models/travelsJson", JSON.stringify(drivers), 'utf8', function(err) {
            if (err) {
            res.status(500).send({ message: err})
            } else {
                res.status(200).json([{
                "mensagem": "Driver substituído com sucesso!",
                newDriver
                }]);
            };
        })
    } else {
        res.status(404).send({ message: "Driver não encontrado para ser utilizado!"})
    }
};

const updateDriver = (req,res) => {
    const requiredId = req.params.id;
    let newData = req.body.data;
    console.log(requiredId)

    let filteredDriver = utils.filterById(drivers, requiredId);

    if(filteredDriver){
        filteredDriver.data = newData;

    //     fs.writeFile("./src/models/travels.json", JSON.stringify(drivers), 'utf8', function(err){
    //         if(err) {
    //             res.status(500).send({ message: err})
    //         } else {
    //             res.status(200).json([{
    //                 "mensagem": "Dados alterados com sucesso!",
    //                 filteredDriver
    //             }]);
    //         }
    //     })
    // } else {
        res.status(500).send({ "message": "Dados não foram atualizados!"})
    }
}


module.exports = {
    createDriver,
    replaceDriver,
    updateDriver
}