const ErrorModelNotFoundException = require("../../exceptions/error-model-not-found-exception").ErrorModelNotFoundException;

// TODO repository
const customerRepo = require("../repositories/customer.repository");

// TODO main work
// TODO Main Service
const getByid = async (req) => {
    const id_data   = req.params.id;

    let where   = { id_customer_account: id_data }
    let options = {
        attributes: { exclude: ["created_at", "updated_at"] },
        where: where
    } 

    const data = await customerRepo.getOne(options);
    if (!data) {
        throw new ErrorModelNotFoundException();
    }

    return data;
};

const getAll = async (req) => {
    const id_data   = req.params.id;

    let where   = { status_aktif: 1 }
    let options = {
        attributes: { exclude: ["created_at", "updated_at"] },
        where: where
    } 

    const data = await customerRepo.getAll(options);
    if (!data) {
        throw new ErrorModelNotFoundException();
    }

    return data;
};

const create = async (req) => {
    const body      = req.body;

    const data = {
        nama_lengkap: body.nama,
        no_hp: body.no_hp,
        email: body.email,
    };

    const resQuery  = await customerRepo.create(data);

    return resQuery;
};

const update = async (req) => {
    const id_data   = req.params.id;
    const body      = req.body;

    const data = {
        nama_lengkap: body.nama,
        no_hp: body.no_hp,
        email: body.email,
    };

    const where = { id_customer_account: id_data }
    const resQuery  = await customerRepo.update(data, where);

    return data;
};

module.exports = {
    getByid,
    getAll,
    create,
    update,
};
