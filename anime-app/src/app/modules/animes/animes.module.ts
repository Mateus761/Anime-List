import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesComponent } from './animes/animes.component';
import { AnimesRoutingModule } from './animes-routing.module';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AnimesComponent
  ],
  imports: [
    CommonModule,
    AnimesRoutingModule,
    TableModule,
    ButtonModule,
    ToastModule
  ]
})
export class AnimesModule { }
