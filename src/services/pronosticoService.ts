import { BalotasModel } from '../models/balotasModel';

export class PronosticoService {
  balotasModel: BalotasModel;

  constructor(balotasModel: BalotasModel) {
    this.balotasModel = balotasModel;
  }

  async obtenerPronostico(): Promise<any> {
    const balotasFrecuentes = await this.balotasModel.obtenerFrecuencias();
    return {
      balotasFrecuentes,  // Retorna las 5 balotas más frecuentes
    };
  }
}
