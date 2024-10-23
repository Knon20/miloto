import express, { Application } from 'express';
import { Pool } from 'pg';
import pronosticoRoutes from './routes/pronosticoRoutes';
import frecuenciaRoutes from "./routes/frecuenciaRoutes";

const app: Application = express();
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'miloto',
  password: '++*12',
  port: 5432,
});

app.use(express.json());

// Rutas para el pronóstico
app.use('/api/pronostico', pronosticoRoutes(pool));
app.use('/api', frecuenciaRoutes(pool));

// Escuchar en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
