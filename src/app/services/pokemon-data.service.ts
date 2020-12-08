import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  url = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemons(offset = 0) {
    return this.http.get(`${this.url}/pokemon?offset=${offset}&limit=25`).pipe(
      map((response: any) => {
        return response.results;
      })
    );
  }

  queryPokemons(id: number) {
    return this.http.get(`${this.url}/pokemon/${id}`).pipe(
      map((response: any) => {
        return response;
      }) 
    );
  }

  getLocalStorageData(key: string): any {
    return localStorage.getItem(key);
  }

  setLocalStorageData(key: string, data: any): void {
    localStorage.setItem(key, data);
  }

}
