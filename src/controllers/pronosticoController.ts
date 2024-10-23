import { Request, Response } from 'express';
import { PronosticoService } from '../services/pronosticoService';

export class PronosticoController {
  pronosticoService: PronosticoService;

  constructor(pronosticoService: PronosticoService) {
    this.pronosticoService = pronosticoService;
  }

  async obtenerPronostico(req: Request, res: Response): Promise<void> {
    try {
      const pronostico = await this.pronosticoService.obtenerPronostico();
      res.json(pronostico);
    } catch (error) {
      res.status(500).json({ error: 'Error obteniendo el pronóstico' });
    }
  }
}
