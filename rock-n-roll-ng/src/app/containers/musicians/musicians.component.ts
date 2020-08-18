import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from 'juliette';
import { AppState } from '../../store/app-state';
import { fromMusicians } from '../../store/handlers';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'rnr-musicians',
  templateUrl: './musicians.component.html',
})
export class MusiciansComponent implements OnInit, OnDestroy {
  private destroy = new Subject();

  searchTermControl = new FormControl();
  musiciansState$ = this.store.select(fromMusicians.featureKey);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromMusicians.fetchMusicians());

    this.searchTermControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy))
      .subscribe(searchTerm => this.store.dispatch(fromMusicians.updateSearchTerm({ searchTerm })));
  }

  onUpdateSelectedPageSize(selectedPageSize: number): void {
    this.store.dispatch(fromMusicians.updateSelectedPageSize({ selectedPageSize }));
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }
}
