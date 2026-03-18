import './ListOfCards.scss'

function ListOfCards({products}) {

    if (products && products.length !== 0) {
        return (
            <ul className='product-cards'>
                {products.map((product) => (<li key={product.id} className='product-cards__card'>
                    <img src={product.image} className='product-cards__image'></img>
                    <span className='product-cards__title'>{product.title}</span>
                    <span className='product-cards__price'>{product.price} ₽</span>
                    </li>))}
            </ul>
        )
    } else if (products === null) {
        return (<span className='product-cards__alt-info'>Загрузка...</span>)
    } else return (<span className='product-cards__alt-info'>Товары не найдены</span>)
    
}

export default ListOfCards