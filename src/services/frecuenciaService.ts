import { BalotasModel } from '../models/balotasModel';

export class FrecuenciaService {
    balotasModel: BalotasModel;

    constructor(balotasModel: BalotasModel) {
        this.balotasModel = balotasModel;
    }

    async obtenerFrecuencias(): Promise<any> {
        const balotasFrecuentes = await this.balotasModel.obtenerFrecuenciaDeTodasLasBalotas();
        return {
            balotasFrecuentes,  // Retorna las 5 balotas más frecuentes
        };
    }
}
