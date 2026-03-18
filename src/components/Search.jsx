import './Search.scss'
import { useState } from 'react'

function Search({setFilteredProducts, products}) {
    const [timerId, setTimerId] = useState(null)

    function searchHandler(e) {
        if (timerId) clearTimeout(timerId)

        setTimerId(setTimeout(() => {
            if (e.target.value.length !== 0) {
                setFilteredProducts(products.filter((product) => product.title.toLowerCase().includes(e.target.value.toLowerCase())))
            } else setFilteredProducts(products)
            
        }, 300))

        console.log('inputHandler')
    }

    return (<input type="search" placeholder="🔍︎" onChange={(e) => searchHandler(e)} className="search"></input>)
}

export default Search