import { Injectable } from '@angular/core';
import { ofType, Store } from 'juliette';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { fromMusicians, MusiciansAppState } from './index';
import { MusiciansService } from '../core/services/musicians.service';

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

  constructor(
    private store: Store<MusiciansAppState>,
    private musiciansService: MusiciansService,
  ) {}
}
