import express from 'express';
const router = express.Router();


import { 
    home,
    operacion,
    saludo
} from '../controller/index.js';

router
    .route('/home')
    .get(home)

router
    .route('/operacion/:numero') // Recibir parametros
    .get(operacion)

router
    .route('/saludo/:nombre') // Recibir parametros
    .get(saludo)

export default router;