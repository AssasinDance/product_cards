import { useEffect, useState } from 'react'
import './ListOfCards.css'

function ListOfCards() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api')
        .then((res) => res.json())
        .then((json) => setProducts(json))
    }, [])

    if (products) {
        return (
            <ul>
                {products.map((product) => (<li key={product.id}>{product.title}</li>))}
            </ul>
        )
    } else return ('Loading...')
    
}

export default ListOfCards