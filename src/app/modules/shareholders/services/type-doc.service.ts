import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { TipoDocumento } from '../interfaces/type-doc';

@Injectable({providedIn: 'root'})
export class TypeDocService {

private apiUrl = 'http://127.0.0.1:8000/api'

  constructor(private httpClient: HttpClient) { }

typeDoc(): Observable<TipoDocumento[]>{
  return this.httpClient.get<TipoDocumento[]>(`${ this.apiUrl }/tipo-documento`);

}
}
