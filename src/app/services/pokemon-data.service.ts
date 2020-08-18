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
      switchMap((response: any) => {
        return response.results;
      })
    );
  }
}
