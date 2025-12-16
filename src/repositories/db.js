import 'dotenv/config';
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST || 'postgres',
  port: Number(process.env.DB_PORT || 5432),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'pruebaDB'
});

export async function testConnection() {
  try {
    await pool.query('SELECT 1');
    console.log('DB connection OK');
    return true;
  } catch (err) {
    console.error('DB connection error:', err);
    return false;
  }
}

export default pool;
