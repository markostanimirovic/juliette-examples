import React, { useCallback, useEffect } from 'react';
import { AppState } from '../store';
import { fromMusicians } from '../store/handlers';
import { useDispatch, useSelector } from 'juliette-react';

const selectMusicians = (state: AppState) => state[fromMusicians.featureKey];

function Musicians() {
  const state = useSelector(selectMusicians);
  const dispatch = useDispatch();

  const onUpdateSearchTerm = useCallback(
    (searchTerm: string) => dispatch(fromMusicians.updateSearchTerm({ searchTerm })),
    [dispatch],
  );

  const onUpdateSelectedPageSize = useCallback(
    (selectedPageSize: number) =>
      dispatch(fromMusicians.updateSelectedPageSize({ selectedPageSize })),
    [dispatch],
  );

  useEffect(() => dispatch(fromMusicians.fetchMusicians()), [dispatch]);

  return (
    <div>
      <h1>🤘 Musicians</h1>
      <input
        type="text"
        onChange={event => onUpdateSearchTerm(event.target.value)}
        placeholder="🔎"
      />

      {state.loading && <h1>🎠</h1>}
      {!state.loading && (
        <ul>
          {state.musicians.map((musician, i) => (
            <li key={i}>
              {musician.name} {musician.weapon}
            </li>
          ))}
        </ul>
      )}

      <div className="buffer-top">
        {state.pageSizes.map((pageSize, i) => (
          <button
            key={i}
            className={pageSize === state.selectedPageSize ? 'selected' : ''}
            onClick={() => onUpdateSelectedPageSize(pageSize)}
          >
            {pageSize}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Musicians;
