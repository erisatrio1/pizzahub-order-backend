import { Sequelize } from "sequelize";
import db from "../../config/Database.js";

const { DataTypes } = Sequelize;

const Order = db.define('order', {
    uuid:{
        type:DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    order_details:{
        type: DataTypes.JSON,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 150]
        }
    },
}, {
    freezeTableName: true
});

export default Order;