import * as service from '../services/empleados.service.js';

export const getRoot = (req, res) => {
  res.send('App básica en NodeJs');
};

export async function getEmpleados(req, res) {
  try {
    const rows = await service.getAllEmpleados();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar empleados' });
  }
}

export async function getTeamLeaders(req, res) {
  try {
    const rows = await service.getTeamLeaders();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar Team Leaders' });
  }
}

export async function createTrainee(req, res) {
  try {
    const payload = req.body || {};
    const rows = await service.insertTrainee(payload);
    res.status(201).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al insertar trainee' });
  }
}

export async function changeRole(req, res) {
  try {
    const payload = req.body || {};
    const rows = await service.changeEmployeeDepartment(payload);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar empleado' });
  }
}

export async function countEmpleadosDept1(req, res) {
  try {
    const rows = await service.countEmployeesByDepartment(1);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar empleados del departamento 1' });
  }
}

export async function countEmpleadosDept2(req, res) {
  try {
    const rows = await service.countEmployeesByDepartment(2);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar empleados del departamento 2' });
  }
}
