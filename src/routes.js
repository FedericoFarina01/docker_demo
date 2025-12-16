import express from 'express';
import * as controller from './controllers/empleados.controller.js';

const router = express.Router();

router.get('/', controller.getRoot);
router.get('/empleados', controller.getEmpleados);
router.get('/team-leaders', controller.getTeamLeaders);
router.post('/trainee', controller.createTrainee);
router.put('/rol-change', controller.changeRole);
router.get('/cant-empleados', controller.countEmpleadosDept1);
router.get('/cant-empleados-2', controller.countEmpleadosDept2);

export default router;
