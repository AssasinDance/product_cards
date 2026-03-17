import { useEffect, useState } from 'react'
import './ListOfCards.scss'

function ListOfCards() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api')
        .then((res) => res.json())
        .then((json) => setProducts(json))
    }, [])

    if (products) {
        return (
            <ul className='product-cards'>
                {products.map((product) => (<li key={product.id} className='product-cards__card'>
                    <img src={product.image} className='product-cards__image'></img>
                    <span className='product-cards__title'>{product.title}</span>
                    <span className='product-cards__price'>{product.price} ₽</span>
                    </li>))}
            </ul>
        )
    } else return ('Loading...')
    
}

export default ListOfCards