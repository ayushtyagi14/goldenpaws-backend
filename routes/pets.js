const express = require("express");
const router = express.Router();
const { fetchDetails, fetchPets, filterPets } = require("../controllers/pet");

// Route to get a single pet by id
router.get("/details/:slug", fetchDetails);

// Route to get all pets
router.get("/getAllPets", fetchPets);

// Route to filter pets by type and/or size
router.get("/filterPets/:type?/:size?", filterPets);

module.exports = router;
