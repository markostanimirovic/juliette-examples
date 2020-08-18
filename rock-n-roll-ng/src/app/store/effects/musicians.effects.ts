import { Injectable } from '@angular/core';
import { ofType, Store } from 'juliette';
import { AppState } from '../app-state';
import { MusiciansService } from '../../core/services/musicians.service';
import { fromMusicians } from '../handlers';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MusiciansEffects {
  invokeFetchMusicians$ = this.store.handlers$.pipe(
    ofType(fromMusicians.updateSearchTerm, fromMusicians.updateSelectedPageSize),
    map(() => fromMusicians.fetchMusicians()),
  );

  fetchMusicians$ = this.store.handlers$.pipe(
    ofType(fromMusicians.fetchMusicians),
    withLatestFrom(this.store.select(fromMusicians.featureKey)),
    switchMap(([, { searchTerm, selectedPageSize }]) =>
      this.musiciansService.getMusicians(searchTerm, selectedPageSize).pipe(
        map(musicians => fromMusicians.fetchMusiciansSuccess({ musicians })),
        catchError(() => of(fromMusicians.fetchMusiciansError())),
      ),
    ),
  );

  constructor(private store: Store<AppState>, private musiciansService: MusiciansService) {}
}
