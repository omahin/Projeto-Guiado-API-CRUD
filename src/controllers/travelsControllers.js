const travels = require("../models/travels.json");
const utils = require("../utils/travelUtils");

const getAllTravels = (req, res) => {
    res.status(200).json(travels);
};

const getTravelById = (req, res) => {
    const resquestId = req.params.id;
    const filteredTravel = utils.filterById(travels, resquestId);

    res.status(200).send(filteredTravel);
};

const getAllPassengerCapacity = (req, res) => {
    const filteredTravel = travels.filter(quant => quant.busInfos.capacity > 0);

    const capacitySort = filteredTravel.sort(function (a, b) {

        if (a.busInfos.capacity > b.busInfos.capacity) {
            return 1;
        } else if (b.busInfos.capacity > a.busInfos.capacity) {
            return -1;
        } else {
            return 0
        }
    })
    res.status(200).send(capacitySort);
}


const deleteTravel = (req, res) => {
    const requiredId = req.params.id;

    let filteredTravel = utils.filterById(travels, requiredId);

    // const index = travels.indexOf(filteredTravel);

    res.status(200).json([{
        "mensagem": "Viagem deletada com sucesso!",
        filteredTravel
    }]);
};

module.exports = {
    getAllTravels,
    getTravelById,
    getAllPassengerCapacity,
    deleteTravel
}