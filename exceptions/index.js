const { ErrorNotFoundException } = require("./error-not-found.exception");
const { ErrorInvalidParameterException } = require("./error-invalid-parameter.exception");
const { ErrorCodeException } = require("./error-code.exception");

const { ErrorModelNotFoundException } = require("./error-model-not-found-exception");
const { ErrorModelDuplicateDataException } = require("./error-model-duplicate-data.exception");
const { ErrorQueryException } = require("./error-query.exception");

const urlValidation = (req, res, next) => {
    throw new ErrorNotFoundException("Url Not Found");
};

const handleErrors = (err, req, res, next) => {
    if (err instanceof ErrorModelNotFoundException) {
        return res.status(200).json({
            response: [],
            metaData: {
                message: `Ops, ${err.message ? err.message : 'Data tidak ditemukan.'}`,
                code: 200,
                response_code: "5574",
            },
        });
    }

    if (err instanceof ErrorNotFoundException) {
        return res.status(404).json({
            response: [],
            metaData: {
                message: "Ops, " + err.message,
                code: 404,
                response_code: "0001",
            },
        });
    }

    if (err instanceof ErrorInvalidParameterException) {
        return res.status(422).json({
            response: err.data,
            metaData: {
                message: "Ops, " + err.message,
                code: 422,
                response_code: "5505",
            },
        });
    }

    if (err instanceof ErrorModelDuplicateDataException) {
        return res.status(422).json({
            response: err.data,
            metaData: {
                message: "Ops, " + err.message,
                code: 422,
                response_code: "5542",
            },
        });
    }

    if (err instanceof ErrorCodeException) {
        return res.status(500).json({
            response: err.data,
            metaData: {
                message: "Ops, " + err.message,
                code: 500,
                response_code: "0001",
            },
        });
    }

    if (err instanceof ErrorQueryException) {
        return res.status(err.data.metaData.code).json({
            response: err.data.data,
            metaData: {
                message: "Ops, terjadi kesalahan query. " + err.data.metaData.message,
                code: err.data.metaData.code,
                response_code: err.data.metaData.response_code,
            },
        });
    }

    console.error(err);
    return res.status(500).json({
        response: [],
        metaData: {
            message: "Ops, " + err.message,
            code: 500,
            response_code: "0001",
        },
    });
};

module.exports = {urlValidation, handleErrors};
