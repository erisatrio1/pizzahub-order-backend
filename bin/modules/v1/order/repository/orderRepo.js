import Order from "../../../../infra/MySQL/Order.js";
import { dbResult } from "../../../../utils/Response.js";


export const getOrderRepo = async() => {
    try {
        const orderRepo = await Order.findAll({
            attributes:['uuid', 'order_details']
        });
        return dbResult(orderRepo, null);
    } catch (error) {
        console.log("error", error.message);
        return dbResult(null, new Error('error query to database'))
    }
}

export const storeOrderRepo = async(order) => {
    try {
        const order_details  = order;
        await Order.create({
            order_details:order_details
        });
        return dbResult(order_details, null);
    } catch (error) {
        console.log("error", error.message);
        return dbResult(null, new Error('error query to database'))
    }
}