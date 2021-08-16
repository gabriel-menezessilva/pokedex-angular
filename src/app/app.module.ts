import { HeaderComponent } from './components/header/header.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeInfoComponent } from './pages/poke-info/poke-info.component';
import { PokeListComponent } from './pages/poke-list/poke-list.component';
import { PokemonDataService } from './services/pokemon-data.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    PokeInfoComponent,
    PokeCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokemonDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
