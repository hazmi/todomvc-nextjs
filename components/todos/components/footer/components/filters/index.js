import React from 'react';
import { FilterItem } from './components/filter-item';
import "./index.scss";

export const Filters = ({ filterActive }) => (
  <ul className="filters">
    <FilterItem
      to="/"
      selected={(filterActive === 'all')}
    >
      All
    </FilterItem>
    <FilterItem
      to="/active"
      selected={(filterActive === 'active')}
    >
      Active
    </FilterItem>
    <FilterItem
      to="/completed"
      selected={(filterActive === 'completed')}
    >
      Completed
    </FilterItem>
  </ul>
);

export default Filters;
