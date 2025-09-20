import { useState } from 'react';
import { data } from '../../../data';
import React from 'react';

const UseStateArray = () => {

  const [people, setPeople] = useState(data);

  const removeItem = (id) =>{
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);

  }
  const removeAllItems = () => {
    setPeople([]);
  }

  return (
    <div>
            {people.map((person) =>{
          const {id, name} = person
          return <div key={id} className='item'>
            <h4 style={{ marginTop: '2rem' }}>{name}</h4>
            <button
            className='btn'
            onClick={() => removeItem(id)}>
              remove person {person.name}
            </button>
          </div>
        })
      }
      <button
      style={{ marginTop: '2rem' }}
      className='btn'
      onClick={removeAllItems}>
        Remove all people
      </button>
    </div>
)

};

export default UseStateArray;
