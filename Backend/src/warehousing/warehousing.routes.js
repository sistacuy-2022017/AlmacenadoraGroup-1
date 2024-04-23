import {Router} from 'express';
import {check} from 'express-validator';
import {createTask,} from './warehousing.controller.js';
const routesWarehousing = Router();

routesWarehousing.post(
    '/createTask',
     [
        
     ], createTask);

     export default routesWarehousing;