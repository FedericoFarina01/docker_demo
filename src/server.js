import express from 'express';
import router from './routes.js';
import { testConnection } from './db.js';

const app = express();
app.use(express.json());
app.use(router);

(async () => {
  await testConnection();
})();

app.listen(3000, () => {
  console.log(`Servidor corriendo en puerto 3000`);
});