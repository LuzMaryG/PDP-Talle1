import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { ProductsData } from '../../Data/ProductsData'
import styles from './styles.module.scss'

export const Products = () => {
  const { addItemToCart } = useContext(CartContext)
  const { cartItems } = useContext(CartContext);

  let  localAmount;
  let arrayAmount;

  const amount = (product) => {

    cartItems.map((productInCart) => {
      if (productInCart.id === product.id) {
          localAmount =  productInCart.amount;
          arrayAmount = product.amount;
      } 
  })
  }

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
          cantidad: {amount(product)}
          
          {product.amount}
          <button disabled={localAmount > arrayAmount} onClick={() => addItemToCart(product)} >Agregar a Carrito</button>

        </div>
      ))}
    </div>
  )
}
