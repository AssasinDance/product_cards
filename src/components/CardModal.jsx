import './CardModal.scss'
import { useEffect, useCallback } from 'react'

function CardModal({product, setSelectedProduct}) {
    const closingHandler = useCallback(() => {
        setSelectedProduct(null)
    }, [setSelectedProduct])

    const onKeyDownHandler = useCallback((e) => {
        if (e.key === "Escape") closingHandler()
    }, [closingHandler])

    useEffect(() => {
        document.addEventListener('keydown', onKeyDownHandler)
    }, [onKeyDownHandler])

    if (product) {
        return (
        <>
            <div className='background' onClick={closingHandler}></div>
            <div className="card-modal" onKeyDown={(e) => onKeyDownHandler(e)}>
                <button className="card-modal__cross" onClick={closingHandler}>✘</button>
                <img src={product.image} className='card-modal__image'></img>
                <div className='card-modal__title'>{product.title}</div>
                <div className='card-modal__price'>{product.price} ₽</div>
                <div className='card-modal__description'>{product.description}</div>
            </div>
        </>
    )
    }
    
    return null
}

export default CardModal