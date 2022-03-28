import { UpdateAnimesRoutingModule } from './update-animes-routing.module';
import { UpdateAnimesComponent } from './update-animes/update-animes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UpdateAnimesComponent
  ],
  imports: [
    CommonModule,
    UpdateAnimesRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    ReactiveFormsModule
  ]
})
export class UpdateAnimesModule { }
