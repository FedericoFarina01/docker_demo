import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
app.use(express.json());

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  host: 'postgres',  // Nombre del servicio en docker-compose
  port: 5432,
  user: 'root',
  password: 'admin',
  database: 'pruebaDB'
});

// Test de conexión (envuelto en función async)
(async () => {
  try {
    const result = await pool.query("SELECT * FROM empleados");
    console.log('Empleados:', result.rows);
  } catch (err) {
    console.error('Error consultando empleados:', err);
  }
})();

// Ruta principal
app.get('/', (req, res) => {
  res.send("App básica en NodeJs")
});

// Ruta para obtener empleados
app.get('/empleados', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM empleados');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar empleados' });
  }
});

// Ruta para obtener Team Leaders
app.get('/team-leaders', async (req, res) => {
  try {
    const result = await pool.query('SELECT e.id, e.nombre, e.edad, r.nombre AS rol FROM empleados e JOIN roles r ON e.id_roles = r.id WHERE r.nombre = \'Team Leader\'');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar Team Leaders' });
  }
});


// Ruta para insertar Trainees
app.post('/trainee', async (req, res) => {
  try {
    const result = await pool.query("INSERT INTO empleados (nombre, edad, id_departamento, id_roles) VALUES ('Pepe', 20, 5, 6)");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al insertar trainee' });
  }
});


// Ruta para cambiar un empleado de departamento
app.put('/rol-change', async (req, res) => {
  try {
    const result = await pool.query("UPDATE empleados SET id_departamento = 1 WHERE nombre = 'Valentina' RETURNING *");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al actualizar empleado' });
  }
});


app.listen(3000, () => {
  console.log(`Servidor corriendo en puerto 3000`);
});