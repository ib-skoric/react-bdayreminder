import React, { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  return (
    <main>
      <section className='container'>
        <h3>0 Birthdays today.</h3>
        <List />
        <button onClick={() => console.log('clicked')}>Clear all</button>
      </section>
    </main>
  );
}

export default App;