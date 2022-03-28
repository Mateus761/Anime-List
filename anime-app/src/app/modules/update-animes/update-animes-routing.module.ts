import { UpdateAnimesComponent } from './update-animes/update-animes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':id',
    component: UpdateAnimesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateAnimesRoutingModule { }