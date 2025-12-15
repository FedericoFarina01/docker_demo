import express from 'express';
import {
  getAllEmpleados,
  getTeamLeaders,
  insertTrainee,
  changeEmployeeDepartment,
  countEmployeesByDepartment
} from './empleadosService.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('App básica en NodeJs');
});

router.get('/empleados', async (req, res) => {
  try {
    const rows = await getAllEmpleados();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar empleados' });
  }
});

router.get('/team-leaders', async (req, res) => {
  try {
    const rows = await getTeamLeaders();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar Team Leaders' });
  }
});

router.post('/trainee', async (req, res) => {
  try {
    const payload = req.body || {};
    const rows = await insertTrainee(payload);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al insertar trainee' });
  }
});

router.put('/rol-change', async (req, res) => {
  try {
    const payload = req.body || {};
    const rows = await changeEmployeeDepartment(payload);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar empleado' });
  }
});

router.get('/cant-empleados', async (req, res) => {
  try {
    const rows = await countEmployeesByDepartment(1);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar empleados del departamento' });
  }
});

router.get('/cant-empleados-2', async (req, res) => {
  try {
    const rows = await countEmployeesByDepartment(2);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar empleados del departamento 2' });
  }
});

export default router;
