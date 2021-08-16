import { PokeInfoComponent } from './pages/poke-info/poke-info.component';
import { PokeListComponent } from './pages/poke-list/poke-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'pokemons/:id', component: PokeInfoComponent },
  { path: 'pokemons', component: PokeListComponent },
  { path: '', redirectTo: '/pokemons', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
