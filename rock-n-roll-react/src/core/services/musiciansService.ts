import { Observable, of } from 'rxjs';
import { Musician } from '../models/musician';
import { musiciansMock } from '../mocks/musiciansMock';
import { delay, map } from 'rxjs/operators';
import { containsIgnoreCase } from './stringHelper';

export function getMusicians(searchTerm: string, pageSize: number): Observable<Musician[]> {
  return of(musiciansMock).pipe(
    map(musicians =>
      musicians
        .filter(musician => containsIgnoreCase(musician.name, searchTerm.trim()))
        .splice(0, pageSize),
    ),
    delay(500),
  );
}
