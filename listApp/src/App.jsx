
import { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [people, SetPeople] = useState(data);

  return <main>
    <section className='container'>
      <h3>{people.length} bd's today</h3>
      <List people={people} />
    </section>
  </main>
};
export default App;
