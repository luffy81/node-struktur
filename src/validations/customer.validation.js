const { body, param } = require("express-validator");

const isBoolean = (value, { req }) => {
    console.log('typeof value:', typeof value);
    if (typeof value !== 'boolean' && ![0,1].includes(value)) {
        throw new Error('Inputan harus boolean');
    }

    return true
}

module.exports = {
    // User name and email Validation
    datatable: [body("type", "Inputan wajib diisi").exists({ checkFalsy: true }).trim()],

    store: [
        body("kode", "Inputan wajib diisi").exists({ checkFalsy: true }).trim(),
        body("nama_komposisi", "Inputan wajib diisi").exists({ checkFalsy: true }).trim(),
        body("status_klaim_bpjs", "Inputan wajib diisi").exists({ checkFalsy: false }).custom(isBoolean),
    ],

    update: [
        body("kode", "Inputan wajib diisi").exists({ checkFalsy: true }).trim(),
        body("nama_komposisi", "Inputan wajib diisi").exists({ checkFalsy: true }).trim(),
        body("status_klaim_bpjs", "Inputan wajib diisi").exists({ checkFalsy: false }).custom(isBoolean),
    ],

    updateStatus: [
        body("status", "Inputan wajib diisi").exists({ checkFalsy: false }).custom(isBoolean),
    ],

    // User ID Validation
    paramID: [param("id", "Inputan wajib diisi").trim()],
};
