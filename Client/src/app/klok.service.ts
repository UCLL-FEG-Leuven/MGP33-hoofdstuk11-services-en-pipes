import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, map } from 'rxjs';

import { Klok } from './klok';

@Injectable({
  providedIn: 'root',
})
export class KlokService {
  private url = 'http://localhost:3011';

  constructor(private http: HttpClient) { }

  getKlokken$(): Observable<Klok[]> {
    return this.http.get<any[]>(`${this.url}/my-clocks`)
      .pipe(map((klokkenLiteralsArray: any[]) => {
        return klokkenLiteralsArray.map(klokLiteral => new Klok(klokLiteral.name, klokLiteral.timeZone, klokLiteral.locale));
      }));
  }

  getKlokken(): Promise<Klok[]> {
    return firstValueFrom(this.getKlokken$());
  }
}