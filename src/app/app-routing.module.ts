import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './component/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'components', pathMatch: 'full' },
  {
    data: { title: 'components' },
    path: 'components',
    loadChildren: () =>
      import('./template/component-page/component-page.module').then(
        (m) => m.ComponentPageModule
      ),
  },
  {
    data: { title: 'pipes' },
    path: 'pipes',
    loadChildren: () =>
      import('./template/pipes-page/pipes-page.module').then(
        (m) => m.PipesPageModule
      ),
  },
  {
    data: { title: 'directives' },
    path: 'directives',
    loadChildren: () =>
      import('./template/directives-page/directives-page.module').then(
        (m) => m.DirectivesPageModule
      ),
  },
  {
    data: { title: 'services' },
    path: 'services',
    loadChildren: () =>
      import('./template/services-page/services-page.module').then(
        (m) => m.ServicesPageModule
      ),
  },
  {
    data: { title: 'other' },
    path: 'other',
    loadChildren: () =>
      import('./template/other-page/other-page.module').then(
        (m) => m.OtherPageModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
