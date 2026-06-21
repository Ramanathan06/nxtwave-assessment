  import { createContext, useContext, useState, useEffect } from 'react'
  
  const CartContext = createContext(null)
  
  export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => { 
      const saved = localStorage.getItem('cart')
      return saved ? JSON.parse(saved) : []
    })
    
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])
    
    const addToCart = (product) => {
      setCart((prev) => {
        if (prev.find((item) => item.id === product.id)) return prev
        return [...prev, product]
      })
    } 
    
    const removeFromCart = (id) => {
      setCart((prev) => prev.filter((item) => item.id !== id))
    } 
    
    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
    ) 
  } 
  
  export function useCart() {
    return useContext(CartContext)
  }
