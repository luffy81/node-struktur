const ErrorQueryException = require("../../exceptions/error-query.exception").ErrorQueryException;
const errorFormat = require("../../utility/error-format");

// create main Model
const { Op } = require('sequelize');
const Customer  = require('../models/customer.model');

// main work
const getAll = async (options = {}) => {
    try {
        const { attributes, where, transaction, lock } = options;

        let config = {};
        
        if (attributes) config.attributes = attributes;
        if (where) config.where = where;

        // transaksi
        if (lock == "update") config.lock = transaction.LOCK.UPDATE;
        if (transaction) config.transaction = transaction;
        
        return await Customer.findAll(config);
    } catch (error) {
        const errObj = await errorFormat.sequelizeDB(error);
        throw new ErrorQueryException(errObj.metaData.message, errObj);
    }
};

const getOne = async (options = {}) => {
    try {
        const { attributes, where, transaction, lock } = options;

        let config = {};

        if (attributes) config.attributes = attributes;
        if (where) config.where = where;
        
        // transaksi
        if (lock == "update") config.lock = transaction.LOCK.UPDATE;
        if (transaction) config.transaction = transaction;

        return await Customer.findOne(config);
    } catch (error) {
        const errObj = await errorFormat.sequelizeDB(error);
        throw new ErrorQueryException(errObj.metaData.message, errObj);
    }
};

const create = async (data, options = {}) => {
    try {
        const { callback, transaction } = options;

        let config = {};
        
        if (transaction) config.transaction = transaction;

        return await Customer.create(data, config);
    } catch (error) {
        const errObj = await errorFormat.sequelizeDB(error);
        throw new ErrorQueryException(errObj.metaData.message, errObj);
    }
};

const update = async (data = {}, where, options = {}) => {
    try {
        const { transaction } = options;

        let config = {
            where: where
        };

        if (transaction) config.transaction = transaction;
        
        return await Customer.update(data, config);
    } catch (error) {
        const errObj = await errorFormat.sequelizeDB(error);
        throw new ErrorQueryException(errObj.metaData.message, errObj);
    }
};

module.exports = {
    getAll,
    getOne,
    create,
    update,
};
