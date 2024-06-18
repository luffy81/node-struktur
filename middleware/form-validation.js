const { validationResult } = require("express-validator");

const ErrorInvalidParameterException = require("../exceptions/error-invalid-parameter.exception").ErrorInvalidParameterException;

module.exports = (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new ErrorInvalidParameterException(
                "Parameter tidak valid",
                errors.array().map((item) => {
                    const err = {};

                    err.field = item.param;
                    err.message = item.msg;

                    return err;
                })
            );
        }
        next();
    } catch (error) {
        next(error);
    }
};
