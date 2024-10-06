import React from 'react'
import styles from './components/shop/Shop.module.css'
import ShopSearchNav from './components/shop/ShopSearchNav'
import ShopFilter from './components/shop/ShopFilter'
import ShopItems from './components/shop/ShopItems'
import ShopCartMiniDisplay from './components/shop/ShopCartMiniDisplay'

export default function Shop() {
  return (
    <>
    <ShopSearchNav />
    <ShopFilter />
    <ShopItems />
    <ShopCartMiniDisplay />
    </>     
  )
}
