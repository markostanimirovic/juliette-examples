import { RouterModule, Routes } from '@angular/router';
import { MusiciansComponent } from './musicians.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: MusiciansComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusiciansRoutingModule {}
