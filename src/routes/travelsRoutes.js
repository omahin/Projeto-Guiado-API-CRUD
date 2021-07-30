const express = require("express");
const router = express.Router();

const travelsController = require("../controllers/travelsControllers");
const passengersController = require("../controllers/passengerControllers");
const driversController = require("../controllers/driversControllers");

// VIAGENS
router.get("/travels/", travelsController.getAllTravels);

router.get("/travels/capacity", travelsController.getAllPassengerCapacity);

router.get("/travels/:id", travelsController.getTravelById);

router.post("/travels/:id/passenger/create", passengersController.createPassenger);

router.delete("/travels/:id/delete", travelsController.deleteTravel);

// PASSAGEIROS
router.get("/passengers", passengersController.getAllPassengers);

router.delete("/passengers/:id", passengersController.deletePassenger);

router.put("/passengers/:id", passengersController.replacePassenger);

router.patch("/passenger/updateName/:id", passengersController.updateName);

// MOTORISTA
router.post("/travels/:id/create", driversController.createDriver);

router.patch("/travels/:id/update", driversController.updateDriver);

router.put("/travels/:id/replace", driversController.replaceDriver);

// router.put("/travels/:id/updateDriver", travelsController.replaceDriver); // substituir motorista


module.exports = router;