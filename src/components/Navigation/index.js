import React from 'react';

function Navigation(props) {
  const { pages = [], currentPage, setCurrentPage } = props;
  return (
    <nav>
      <ul>
        {pages.map((Page) => (
          <li className={`${currentPage === Page && 'highlight'}`} key={Page.name}>
            <span onClick={() => setCurrentPage(Page)}>{Page.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;