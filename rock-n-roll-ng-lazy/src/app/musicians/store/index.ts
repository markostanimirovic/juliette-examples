import * as fromMusicians from './musicians.handlers';

export interface MusiciansAppState {
  [fromMusicians.featureKey]: fromMusicians.State;
}

export { fromMusicians };
