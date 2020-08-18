import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MusiciansComponent } from './components/musicians/musicians.component';
import { EffectsModule, StoreModule } from 'juliette-ng';
import { initialAppState } from './store/app-state';
import { environment } from '../environments/environment';
import { MusiciansEffects } from './store/effects/musicians.effects';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MusiciansComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(initialAppState, !environment.production),
    EffectsModule.forRoot([MusiciansEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
