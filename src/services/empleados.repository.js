import pool from './db.js';

export async function findAll() {
  const result = await pool.query('SELECT * FROM empleados');
  return result.rows;
}

export async function findTeamLeaders() {
  const result = await pool.query(`
    SELECT 
      e.id,
      e.nombre,
      e.edad,
      r.nombre AS rol
    FROM empleados e
    JOIN roles r ON e.id_roles = r.id
    WHERE r.nombre = 'Team Leader'
  `);

  return result.rows;
}

export async function insertEmpleado({
  nombre,
  edad,
  id_departamento,
  id_roles
}) {
  const result = await pool.query(
    `
    INSERT INTO empleados (nombre, edad, id_departamento, id_roles)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [nombre, edad, id_departamento, id_roles]
  );

  return result.rows;
}

export async function updateDepartment(nombre, nuevoDepartamento) {
  const result = await pool.query(
    `
    UPDATE empleados
    SET id_departamento = $1
    WHERE nombre = $2
    RETURNING *
    `,
    [nuevoDepartamento, nombre]
  );

  return result.rows;
}

export async function countByDepartment(deptId) {
  const result = await pool.query(
    `
    SELECT COUNT(*) AS cant_empleados
    FROM empleados
    WHERE id_departamento = $1
    `,
    [deptId]
  );

  return result.rows;
}
