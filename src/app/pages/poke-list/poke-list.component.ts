import { PokemonDataService } from './../../services/pokemon-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  pokemons = [];
  offset: number = 0;

  constructor(private pokemonService: PokemonDataService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons(this.offset).subscribe(res => {
      this.pokemons = [...this.pokemons, res];
    });
  }

}
