import { baseResponse } from "../../../../utils/Response.js";
import { getOrderRepo, storeOrderRepo } from "../repository/orderRepo.js";

export const getOrders = async(req, res) => {
    const {data, error} = await getOrderRepo();
    if (error) {
        res.status(500).json(baseResponse(200, error, null));
        
    } else {
        res.status(200).json(baseResponse(200, null, data));   
    }
}

export const storeOrder = async(req, res) => {
    const { order_details } = req.body;
    const {data, error} = await storeOrderRepo(order_details);
    if (error) {
        res.status(500).json(baseResponse(200, error, null));
        
    } else {
        res.status(200).json(baseResponse(200, 'Order Successfuly', data));   
    }
}