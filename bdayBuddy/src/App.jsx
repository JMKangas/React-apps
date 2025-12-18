import { useState } from "react";
import data from "./data";
import List from "./List";


const App = () => {
  const [people, setPeople] = useState(data)

  return <main>
    <section className="container">
      <h3>
        {people.length} bdays coming
      </h3>
      <List people = {people}/>
    </section>
  </main>
  //return <h2>Birthday Reminder - Starter</h2>;
};
export default App;
