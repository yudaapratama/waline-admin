import cls from 'classnames';
import React from 'react';

export default function ({ current, total, onChange }) {
  if (total < 1) {
    return null;
  }

  return (
    <ul className="typecho-pager">
      {current > 1 ? (
        <li className="prev">
          <a href="#" onClick={() => onChange(current - 1)}>
            «
          </a>
        </li>
      ) : null}
      {current > 4 ? (
        <>
          <li>
            <a href="#" onClick={() => onChange(1)}>
              1
            </a>
          </li>
          <li>
            <span>...</span>
          </li>
        </>
      ) : null}
      {[
        current - 3,
        current - 2,
        current - 1,
        current,
        current + 1,
        current + 2,
        current + 3,
      ]
        .filter((page) => page > 0 && page <= total)
        .map((page) => (
          <li key={page} className={cls({ current: page === current })}>
            <a href="#" onClick={() => onChange(page)}>
              {page}
            </a>
          </li>
        ))}
      {current < total - 3 ? (
        <>
          <li>
            <span>...</span>
          </li>
          <li>
            <a href="#" onClick={() => onChange(total)}>
              {total}
            </a>
          </li>
        </>
      ) : null}
      {current < total ? (
        <li className="next">
          <a href="#" onClick={() => onChange(current + 1)}>
            »
          </a>
        </li>
      ) : null}
    </ul>
  );
}
