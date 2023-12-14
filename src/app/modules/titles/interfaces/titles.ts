export interface Titulos {
  id:                    string;
  titulo:                string;
  accionista_id:         string;
  cantidad_acciones:     string;
  valor:                 string;
  tipo_accionista_id:    string;
  tipo_transferencia_id: string;
  estado:                string;
  fecha_creacion:        Date;
  fecha_modificacion:    Date;
  fecha_eliminacion:     null;
  aud_login:             string;
}
