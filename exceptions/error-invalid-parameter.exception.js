class ErrorInvalidParameterException extends Error {
    constructor(message, data = null) {
        super();
        this.message = message ? message : "Parameter tidak valid";
        this.data = data;
    }
}

module.exports = {
    ErrorInvalidParameterException,
};
