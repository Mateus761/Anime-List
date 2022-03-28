import { MinhaListaComponent } from './minha-lista/minha-lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinhaListaRoutingModule } from './minha-lista-routing.module';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    MinhaListaComponent
  ],
  imports: [
    CommonModule,
    MinhaListaRoutingModule,
    TableModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class MinhaListaModule { }