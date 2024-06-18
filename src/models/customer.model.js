const { DataTypes } = require('sequelize');
const sequelize = require('../../database/mysql.connection');

const Customer = sequelize.define(
    'customer_account',
    {
        id_customer_account: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        nama_lengkap: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        no_hp: {
            type: DataTypes.STRING,
        },
        status_aktif: {
            type: DataTypes.BOOLEAN,
        },
        created_at: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        updated_at: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = Customer;