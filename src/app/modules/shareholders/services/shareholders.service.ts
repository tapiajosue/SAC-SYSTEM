import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Accionistas } from '../interfaces/shareholder';

@Injectable({providedIn: 'root'})
export class ShareholdersService {

private apiUrl = 'http://127.0.0.1:8000/api'

  constructor(private httpClient: HttpClient) { }

getData(): Observable<Accionistas[]>{
  return this.httpClient.get<Accionistas[]>(`${ this.apiUrl }/accionistas`);
}
}
