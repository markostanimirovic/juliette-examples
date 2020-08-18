import { Musician } from '../../core/models/musician';
import { createHandler } from 'juliette';

export const featureKey = 'musicians';

export interface State {
  musicians: Musician[];
  loading: boolean;
  searchTerm: string;
  selectedPageSize: number;
  pageSizes: number[];
}

export const initialState: State = {
  musicians: [],
  loading: false,
  searchTerm: '',
  selectedPageSize: 3,
  pageSizes: [3, 5, 7],
};

export const fetchMusicians = createHandler<State>(
  '[Musicians] Fetch Musicians',
  featureKey,
  state => ({ ...state, loading: true }),
);
export const fetchMusiciansSuccess = createHandler<State, { musicians: Musician[] }>(
  '[Musicians] Fetch Musicians Success',
  featureKey,
  (state, { musicians }) => ({ ...state, musicians, loading: false }),
);
export const fetchMusiciansError = createHandler<State>(
  '[Musicians] Fetch Musicians Error',
  featureKey,
  state => ({ ...state, musicians: [], loading: false }),
);

export const updateSearchTerm = createHandler<State, { searchTerm: string }>(
  '[Musicians] Update Search Term',
  featureKey,
  (state, { searchTerm }) => ({ ...state, searchTerm }),
);
export const updateSelectedPageSize = createHandler<State, { selectedPageSize: number }>(
  '[Musicians] Update Selected Page Size',
  featureKey,
  (state, { selectedPageSize }) => ({ ...state, selectedPageSize }),
);
