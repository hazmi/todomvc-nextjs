import React from 'react';
import Link from 'next/link';
import "./index.scss";

export const FilterItem = ({
  selected,
  children,
  to
}) => (
  <li className="filter-item">
    <Link href={to}>
      <a className={selected ? 'selected' : ''}>{children}</a>
    </Link>
  </li>
);

export default FilterItem;
