import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PokemonDataService } from './pokemon-data.service';

describe('PokemonDataService', () => {
  let service: PokemonDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonDataService]
    }).compileComponents();

    service = TestBed.inject(PokemonDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should work', () => {
    let expectedData = [
      {
        name: 'Charizard',
        types: [
          {type: 'Fire'},
          {type: 'Flying'}
        ],
        abilities: [],
        sprite: '../../../assets/pokemon/1.png',
        url: ''
      }
    ];
    let url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=25';

    service.getPokemons().subscribe(data => {
      console.log('NÃO ENTRA?', data)
      expect(data).toEqual(expectedData);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('GET');

    req.flush(expectedData);
  });
});
