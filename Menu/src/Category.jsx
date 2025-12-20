import React from 'react'
import GategoryItem from './GategoryItem'

const Gategory = ({ items, filterFunction }) => {
  return (
    <div className="btn-container">
      {items.map((item) => {
        return (
          <button
            className="btn"
            key={item}
            onClick={() => filterFunction(item)}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}
//
export default Gategory
