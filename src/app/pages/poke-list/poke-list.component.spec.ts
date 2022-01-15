import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonDataService } from './../../services/pokemon-data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeListComponent } from './poke-list.component';


describe('PokeListComponent', () => {
  let component: PokeListComponent;
  let fixture: ComponentFixture<PokeListComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PokeListComponent],
      providers: [PokemonDataService]
    })
    .compileComponents();


    fixture = TestBed.createComponent(PokeListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
