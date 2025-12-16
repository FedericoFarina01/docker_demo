import * as repository from '../repositories/empleados.repository.js';

export async function getAllEmpleados() {
  return repository.findAll();
}

export async function getTeamLeaders() {
  return repository.findTeamLeaders();
}

export async function insertTrainee({
  nombre = 'Pepe',
  edad = 20,
  id_departamento = 5,
  id_roles = 6
} = {}) {
  return repository.insertEmpleado({
    nombre,
    edad,
    id_departamento,
    id_roles
  });
}

export async function changeEmployeeDepartment({
  nombre = 'Valentina',
  nuevoDepartamento = 1
} = {}) {
  if (!nombre) {
    throw new Error('Nombre requerido');
  }

  return repository.updateDepartment(nombre, nuevoDepartamento);
}

export async function countEmployeesByDepartment(deptId) {
  return repository.countByDepartment(deptId);
}
