import { Router } from 'express';
import { FrecuenciaController } from '../controllers/frecuenciaController';
import { BalotasModel } from '../models/balotasModel';
import { FrecuenciaService } from '../services/frecuenciaService';
import { Pool } from 'pg';

export default function frecuenciaRoutes(pool: Pool) {
    const balotasModel = new BalotasModel(pool);
    const frecuenciaService = new FrecuenciaService(balotasModel);
    const frecuenciaController = new FrecuenciaController(frecuenciaService);
    const router = Router();

    router.get('/frecuencias', (req, res) => frecuenciaController.obtenerFrecuencias(req, res));
    return router;
}
