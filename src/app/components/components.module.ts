import { PokeCardComponent } from './poke-card/poke-card.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HeaderComponent,
    PokeCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    PokeCardComponent
  ]
})
export class ComponentsModule { }
