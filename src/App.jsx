import './App.css'
import ListOfCards from './components/ListOfCards'
import Search from './components/Search'
import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState(null)
  const [filteredProducts, setFilteredProducts] = useState(null)

  useEffect(() => {
      fetch('http://localhost:3000/api')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json)
        setFilteredProducts(json)
      })
  }, [])

  return (
    <>
      <Search products={products} setFilteredProducts={setFilteredProducts}></Search>
      <ListOfCards products={filteredProducts}></ListOfCards>
    </>
  )
}

export default App
