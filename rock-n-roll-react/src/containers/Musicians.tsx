import React, { ChangeEvent, useEffect } from 'react';
import { AppState } from '../store';
import { fromMusicians } from '../store/handlers';
import { useDispatch, useSelect } from 'juliette-react';

function Musicians() {
  const state = useSelect<AppState, fromMusicians.State>(fromMusicians.featureKey);
  const dispatch = useDispatch();

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(fromMusicians.updateSearchTerm({ searchTerm: event.target.value }));

  const handlePageSizeChange = (selectedPageSize: number) =>
    dispatch(fromMusicians.updateSelectedPageSize({ selectedPageSize }));

  useEffect(() => dispatch(fromMusicians.fetchMusicians()), [dispatch]);

  return (
    <div>
      <h1>🤘 Musicians</h1>
      <input type="text" onChange={handleSearchTermChange} placeholder="🔎" />

      {state.loading ? (
        <h1>🎠</h1>
      ) : (
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
            onClick={() => handlePageSizeChange(pageSize)}
          >
            {pageSize}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Musicians;
