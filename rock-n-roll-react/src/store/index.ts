import { fromMusicians } from './handlers';
import { createStore } from 'juliette';

export const initialAppState = {
  [fromMusicians.featureKey]: fromMusicians.initialState,
};

export type AppState = typeof initialAppState;

export const store = createStore(initialAppState, process.env.NODE_ENV === 'development');
