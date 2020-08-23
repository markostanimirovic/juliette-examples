import { NgModule } from '@angular/core';
import { MusiciansComponent } from './musicians.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MusiciansRoutingModule } from './musicians-routing.module';
import { EffectsModule, StoreModule } from 'juliette-ng';
import { fromMusicians } from './store';
import { MusiciansEffects } from './store/musicians.effects';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MusiciansComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MusiciansRoutingModule,
    StoreModule.forFeature(fromMusicians.featureKey, fromMusicians.initialState),
    EffectsModule.register([MusiciansEffects]),
  ],
})
export class MusiciansModule {}
