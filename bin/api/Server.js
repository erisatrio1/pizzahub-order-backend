import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
dotenv.config();

import v1OrderModule from '../modules/v1/order/forms.js'

const app = express();
const VERSION = process.env.VERSION;

app.use(cors({
    origin: '*'
}))

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

console.log("SERVER VERSION: ", VERSION);

app.use('/v1/forms', v1OrderModule);

export default app;