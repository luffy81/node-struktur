const express = require('express');

const formValidation = require("../middleware/form-validation");

const router   = express.Router();

const customerController = require("../src/controllers/customer.controller");
const customerValidation = require("../src/validations/customer.validation");

const pathCore = "/customer";
const pathData = "data";

// Define routes for the /users path
router.get(`${pathCore}/${pathData}/:id`, customerController.showId);
router.get(`${pathCore}/${pathData}`, customerController.showAll);
router.post(`${pathCore}/${pathData}`, customerController.store);
router.put(`${pathCore}/${pathData}/:id`, customerController.update);
router.delete(`${pathCore}/${pathData}/:id`, customerController.destroy);


module.exports = router;