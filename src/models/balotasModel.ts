import { Pool } from 'pg';

export class BalotasModel {
  pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  // Método para obtener las balotas más frecuentes
  async obtenerFrecuencias(): Promise<any> {
    const query = `
      SELECT numero, COUNT(*) AS frecuencia FROM (
        SELECT balota1 AS numero FROM sorteos
        UNION ALL
        SELECT balota2 AS numero FROM sorteos
        UNION ALL
        SELECT balota3 AS numero FROM sorteos
        UNION ALL
        SELECT balota4 AS numero FROM sorteos
        UNION ALL
        SELECT balota5 AS numero FROM sorteos
      ) AS todas_balotas
      GROUP BY numero
      ORDER BY frecuencia DESC
      LIMIT 5;
    `;
    const result = await this.pool.query(query);
    return result.rows;
  }

  async obtenerFrecuenciaDeTodasLasBalotas(): Promise<any> {
    const query = `
      SELECT numero, COUNT(*) AS frecuencia FROM (
        SELECT balota1 AS numero FROM sorteos
        UNION ALL
        SELECT balota2 AS numero FROM sorteos
        UNION ALL
        SELECT balota3 AS numero FROM sorteos
        UNION ALL
        SELECT balota4 AS numero FROM sorteos
        UNION ALL
        SELECT balota5 AS numero FROM sorteos
      ) AS todas_balotas
      GROUP BY numero
      ORDER BY frecuencia DESC;
    `;
    const result = await this.pool.query(query);
    return result.rows;
  }
}
