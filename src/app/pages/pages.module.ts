import { ComponentsModule } from './../components/components.module';
import { PokeInfoComponent } from './poke-info/poke-info.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    PokeListComponent,
    PokeInfoComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
