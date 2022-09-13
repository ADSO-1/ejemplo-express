import express from 'express';
const router = express.Router();


import { 
    home,
    operacion
} from '../controller/index.js';

router
    .route('/home')
    .get(home)

router
    .route('/operacion/:numero')
    .get(operacion)

export default router;