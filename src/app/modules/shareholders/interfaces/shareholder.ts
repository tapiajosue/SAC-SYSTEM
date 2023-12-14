export interface Accionistas {
  id:                 string;
  apellidos:          string;
  nombres:            string;
  nro_documento:      string;
  tipo_documento_id:  string;
  nit:                string;
  pais:               string;
  ciudad:             string;
  direccion:          string;
  nro:                null;
  piso:               null;
  dpto:               null;
  folio:              null;
  telefono:           string;
  fax:                null;
  email:              string;
  empresa:            string;
  estado:             string;
  fecha_creacion:     Date;
  fecha_modificacion: Date;
  fecha_eliminacion:  null;
  aud_login:          string;
}
