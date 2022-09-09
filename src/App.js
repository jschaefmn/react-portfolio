import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Page from './components/Page';

function App() {
  const [pages] = useState([
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Contact' },
    { name: 'Resume' },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <div className='content'>
        <header>
          <Header>
            <Navigation
              pages={pages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}>
            </Navigation>
          </Header>
        </header>
        <main className='components'>
          <Page currentPage={currentPage}></Page>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
