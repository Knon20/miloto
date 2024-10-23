import { Router } from 'express';
import { BalotasModel } from '../models/balotasModel';
import { PronosticoService } from '../services/pronosticoService';
import { PronosticoController } from '../controllers/pronosticoController';
import { Pool } from 'pg';

export default function pronosticoRoutes(pool: Pool) {
  const router = Router();
  const balotasModel = new BalotasModel(pool);
  const pronosticoService = new PronosticoService(balotasModel);
  const pronosticoController = new PronosticoController(pronosticoService);

  router.get('/', (req, res) => pronosticoController.obtenerPronostico(req, res));

  return router;
}
