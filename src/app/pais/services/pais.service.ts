import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(
    private http: HttpClient
  ) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(capital: string): Observable<Country[]>{
    const url = `${this._apiUrl}/capital/${capital}`
    return this.http.get<Country[]>(url)
  }

  buscarRegion(region: string): Observable<Country[]>{
    const url = `${this._apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url);
  }

  getCountryById(idCountry: string): Observable<Country[]>{
    const url = `${this._apiUrl}/alpha/${idCountry}`
    return this.http.get<Country[]>(url)
  }
}
