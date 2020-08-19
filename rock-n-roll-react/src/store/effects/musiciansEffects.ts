import { ofType } from 'juliette';
import { fromMusicians } from '../handlers';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { store } from '../index';
import { getMusicians } from '../../core/services/musiciansService';

export const invokeFetchMusicians$ = store.handlers$.pipe(
  ofType(fromMusicians.updateSearchTerm, fromMusicians.updateSelectedPageSize),
  map(() => fromMusicians.fetchMusicians()),
);

export const fetchMusicians$ = store.handlers$.pipe(
  ofType(fromMusicians.fetchMusicians),
  withLatestFrom(store.select(fromMusicians.featureKey)),
  switchMap(([, { searchTerm, selectedPageSize }]) =>
    getMusicians(searchTerm, selectedPageSize).pipe(
      map(musicians => fromMusicians.fetchMusiciansSuccess({ musicians })),
      catchError(() => of(fromMusicians.fetchMusiciansError())),
    ),
  ),
);
