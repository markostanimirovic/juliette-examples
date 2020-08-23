import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Musician } from '../models/musician';
import { musiciansMock } from '../mocks/musicians.mock';
import { delay, map } from 'rxjs/operators';
import { StringHelper } from '@rnr/core/services/string.helper';

@Injectable({
  providedIn: 'root',
})
export class MusiciansService {
  constructor(private stringHelper: StringHelper) {}

  getMusicians(searchTerm: string, pageSize: number): Observable<Musician[]> {
    return of(musiciansMock).pipe(
      map(musicians =>
        musicians
          .filter(musician =>
            this.stringHelper.containsIgnoreCase(musician.name, searchTerm.trim()),
          )
          .splice(0, pageSize),
      ),
      delay(500),
    );
  }
}
