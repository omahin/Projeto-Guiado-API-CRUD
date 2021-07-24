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

// const passengerNumber = (req, res) => {
//     const requestedId = req.params.id;
// }


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
    // passengerNumber,
    deleteTravel
}