import { useState } from 'react'
import menu from './data'
import Title from './Title'
import Menu from './Menu'
import Gategory from './Category'

const gategoryArray = ['All', ...new Set(menu.map((item) => item.category))]

console.log(gategoryArray)
const App = () => {
  const filterFunction = (category) => {
    if (category === 'All') {
      setMenuItems(menu)
    } else {
      const newArray = menu.filter((item) => item.category === category)
      setMenuItems(newArray)
    }
  }

  const [menuItems, setMenuItems] = useState(menu)
  const [categoryItems, setCategoryItems] = useState(gategoryArray)
  return (
    <main>
      <section className="menu">
        <Title text={'our menu'} />
        <Gategory items={categoryItems} filterFunction={filterFunction} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}
export default App
