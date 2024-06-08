import express from 'express'
import { getOrders,storeOrder } from '../controller/orderControl.js'

const router = express.Router();

router.get('/order', getOrders);
router.post('/order', storeOrder);

export default router;