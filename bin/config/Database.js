import { Sequelize } from "sequelize";

const db = new Sequelize('pizzahub_order', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    port: '3308'
});

export default db;