import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { TipoAccionistas } from '../interfaces/type-acc';

@Injectable({providedIn: 'root'})
export class TypeAccService {

private apiUrl = 'http://127.0.0.1:8000/api'

  constructor(private httpClient: HttpClient) { }

typeAcc(): Observable<TipoAccionistas[]>{
  return this.httpClient.get<TipoAccionistas[]>(`${ this.apiUrl }/tipo-accionistas`);

}
}
