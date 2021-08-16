import { Pokemon } from './../../models/pokemon.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
   
  }

}
