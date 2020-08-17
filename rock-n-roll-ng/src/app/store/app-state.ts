import { fromMusicians } from './handlers';

export const initialAppState = {
  [fromMusicians.featureKey]: fromMusicians.initialState,
};

export type AppState = typeof initialAppState;
