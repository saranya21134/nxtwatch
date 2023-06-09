import React from 'react'

const CartContext = React.createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
})

export default CartContext
