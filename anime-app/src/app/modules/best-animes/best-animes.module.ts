import { BestAnimesComponent } from '../best-animes/best-animes/best-animes.component';
import { NgModule } from '@angular/core';
import { BestAnimesRoutingModule } from './best-animes-routing.module';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    BestAnimesComponent
  ],
  imports: [
    CommonModule,
    BestAnimesRoutingModule,
    TableModule,
    ButtonModule
  ]
})
export class BestAnimesModule { }
