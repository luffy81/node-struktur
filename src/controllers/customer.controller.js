
const resFormat = require("../../utility/response-api");
const customerService = require("../services/customer.service");

// main work
const showId = async (req, res, next) => {
    try {
        let data = await customerService.getByid(req);
        return res.status(200).send(resFormat({code: 200}, data));
    } catch (error) {
        next(error);
    }
};

const showAll = async (req, res, next) => {
    try {
        let data = await customerService.getAll(req);
        return res.status(200).send(resFormat({code: 200}, data));
    } catch (error) {
        next(error);
    }
};

const store = async (req, res, next) => {
    try {
        let data = await customerService.create(req);
        return res.status(200).send(resFormat({code: 200}, data));
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        let data = await customerService.update(req);
        return res.status(200).send(resFormat({code: 200}, data));
    } catch (error) {
        next(error);
    }
};

const destroy = async (req, res, next) => {
    try {
        let data = await customerService.updateStatus(req);
        return res.status(200).send(resFormat({code: 200}, data));
    } catch (error) {
        next(error);
    }
};

module.exports = {
    showId,
    showAll,
    store,
    update,
    destroy
};
