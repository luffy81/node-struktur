module.exports = {
    mysql : {
        USERNAME: process.env.MYSQL_USER || "user",
        PASSWORD: process.env.MYSQL_PASS || "pass",
        DB: process.env.MYSQL_DB || "db",
        HOST: process.env.MYSQL_HOST || "127.0.0.1",
        PORT: process.env.MYSQL_PORT || "9306",
        DIALECT: "mysql",
        OPTIONS: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        LOGGING: console.log
    }
};