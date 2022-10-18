import React from 'react'
import { Cart } from '../Cart'
import { Products } from '../Products'
import styles  from './styles.module.scss';

export const Home = () => {
  return (
    <div className={styles.home1}>
        
        <Products></Products>
        <Cart></Cart>
    </div>
  )
}

export default Home
