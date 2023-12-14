import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Titulos } from '../interfaces/titles';

@Injectable({providedIn: 'root'})
export class AdminTitleService {
  private apiUrl = 'http://127.0.0.1:8000/api'
  constructor(private httpClient: HttpClient) { }

  getTitles(): Observable < Titulos[] > {
  return this.httpClient.get< Titulos[]> (`${ this.apiUrl }/titulos`);
}
}
