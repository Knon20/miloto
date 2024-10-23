import { Request, Response } from 'express';
import { FrecuenciaService } from '../services/frecuenciaService';

export class FrecuenciaController {
    frecuenciaService: FrecuenciaService;

    constructor(frecuenciaService: FrecuenciaService) {
        this.frecuenciaService = frecuenciaService;
    }

    async obtenerFrecuencias(req: Request, res: Response): Promise<void> {
        try {
            const frecuencias = await this.frecuenciaService.obtenerFrecuencias();
            res.json(frecuencias);
        } catch (error) {
            res.status(500).json({ error: 'Error obteniendo las frecuencias de las balotas' });
        }
    }
}
