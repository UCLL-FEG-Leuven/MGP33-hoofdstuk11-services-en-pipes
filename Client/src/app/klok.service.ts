import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';

import { Klok } from './klok';

@Injectable({
  providedIn: 'root',
})
export class KlokService {
  private url = 'http://localhost:3010';

  constructor(private http: HttpClient) { }

  getKlokken$(): Observable<Klok[]> {
    return this.http.get<Klok[]>(`${this.url}/my-clocks`);
  }

  getKlokken(): Promise<Klok[]> {
    return firstValueFrom(this.http.get<Klok[]>(`${this.url}/my-clocks`));
  }
}