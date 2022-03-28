import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'animes',
    loadChildren: () => import('./modules/animes/animes.module').then (m => m.AnimesModule)
  },
  {
    path:'criar',
    loadChildren: () => import('./modules/create-animes/creates-animes.module').then (m => m.CreateAnimesModule)
  },
  {
    path:'alterar',
    loadChildren: () => import('./modules/update-animes/update-animes.module').then (m => m.UpdateAnimesModule)
  },
  {
    path:'top-animes',
    loadChildren: () => import('./modules/best-animes/best-animes.module').then (m => m.BestAnimesModule)
  },
  {
    path:'minha-lista',
    loadChildren: () => import('./modules/minha-lista/minha-lista.module').then (m => m.MinhaListaModule)
  },
  {
    path: '',
    redirectTo: '/animes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
