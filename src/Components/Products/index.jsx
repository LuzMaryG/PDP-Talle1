import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { ProductsData } from '../../Data/ProductsData'
import styles from './styles.module.scss'

export const Products = () => {
  const { addItemToCart } = useContext(CartContext)
  const { cartItems } = useContext(CartContext);

  return (
    <div className={styles.productsContainer}>
      {ProductsData.map((product, i) => (

        <div key={i} className={styles.product}>
          <img src={product.img} alt={product.name}></img>
          <div>
            <p>
              {product.name} - ${product.price}
            </p>
          </div>
          cantidad:
          
          {product.amount}
          
          <button  onClick={() => addItemToCart(product)} >Agregar a Carrito</button>
        </div>
      ))}
    </div>
  )
}
