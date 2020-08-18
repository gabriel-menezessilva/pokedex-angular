import { Pokemon } from './../../models/pokemon.model';
import { PokemonDataService } from './../../services/pokemon-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  offset: number = 0;

  constructor(private pokemonService: PokemonDataService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons(this.offset).subscribe((res) => {
      this.pokemons = [...this.pokemons, ...res];
      this.pokemons.forEach((poke, i) => {
        let index = i + 1;
        poke.sprite = `../../../assets/pokemon/${index}.png`;
        this.getPokeInfo(poke, index);
      });
      this.offset += 25;
    });
  }

  getPokeInfo(pokemon: Pokemon, index: number) {
    this.pokemonService.queryPokemons(index).subscribe(res => {
      pokemon.types = res.types;
      pokemon.abilities = res.abilities;
    })
  }

}
