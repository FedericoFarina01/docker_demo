import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: 'postgres',
  port: 5432,
  user: 'root',
  password: 'admin',
  database: 'pruebaDB'
});

export async function testConnection() {
  try {
    const result = await pool.query('SELECT 1');
    console.log('DB connection OK');
    return true;
  } catch (err) {
    console.error('DB connection error:', err);
    return false;
  }
}

export default pool;
