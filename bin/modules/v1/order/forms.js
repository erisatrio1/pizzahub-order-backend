import express from 'express'
import orderRouter from './router/orderRoute.js'

const router = express.Router();

router.use('/pizzahub', orderRouter);

export default router;