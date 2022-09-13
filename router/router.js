import express from 'express';
const router = express.Router();


import { 
    home
} from '../controller/index.js';

router
    .route('/home')
    .get(home)

export default router;