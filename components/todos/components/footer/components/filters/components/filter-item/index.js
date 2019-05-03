import React from 'react';
import "./index.scss";

export const FilterItem = ({
  selected,
  children,
  to
}) => (
  <li className="filter-item">
    <a href={to} className={selected ? 'selected' : ''}>
      {children}
    </a>
  </li>
);

export default FilterItem;
