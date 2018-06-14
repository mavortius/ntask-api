import logger from "./logger";

module.exports = {
    database: "ntask",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        logging: (sql) => {
            logger.info(`[${new Date()}] ${sql}`);
        },
        define: {
            underscore: true
        }
    },
    jwtSecret: "Nta$K-AP1",
    jwtSession: {session: false}
};