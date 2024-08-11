import {ProductVolumen} from "./productVolumen";

export interface ProductActivity {
  idActividad: number;
  nombreActividad?: string;
  conocimientoActividad?: number;
  relacionamientoActividad?: number;
  condiciontrabajoActividad?: number;
  impactoActividad?: number;
  responsabilidadActividad?: number;
  ponderacionActividad?: number;
  ponderacionnivelActividad?: string;
  ponderaciongoActividad?: string;
  observacionActividad?: string;
  idusuarioregistroActividad?: number;
  idestadoActividad?: number;
  fecharegistroActividad?: Date;
  idProductovolumen?: ProductVolumen;
}
