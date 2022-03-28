import { CreateAnimesComponent } from './create-animes/create-animes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAnimesRoutingModule } from './create-animes-routing.module';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    CreateAnimesComponent
  ],
  imports: [
    CommonModule,
    CreateAnimesRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    ToastModule
  ]
})
export class CreateAnimesModule { }
