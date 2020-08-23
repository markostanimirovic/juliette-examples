import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/musicians', pathMatch: 'full' },
  {
    path: 'musicians',
    loadChildren: () => import('./musicians/musicians.module').then(m => m.MusiciansModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
