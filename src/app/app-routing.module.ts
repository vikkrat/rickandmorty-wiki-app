import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: 'characters',
    component: CharactersListComponent
  },
  {
    path: 'characters/:id',
    component: CharacterDetailsComponent
  },
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/characters',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
