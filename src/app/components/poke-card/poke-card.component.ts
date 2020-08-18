import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  @Input() pokemons;

  constructor() { }

  ngOnInit(): void {
   
  }

}
