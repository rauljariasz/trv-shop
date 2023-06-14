import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  // Shopping Cart - counter
  const [count, setCount] = useState(0)

  // Shopping Cart - Add Products to cart
  const [cartProducts, setCartProducts] = useState([])

  // Shopping Cart - Delete Products
  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id != id)
    setCount(count - 1)
    setCartProducts(filteredProducts)
  }

  // Modal Cart - Checkout side menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  // Modal Product Details
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Show Products (Product Details)
  const [productToShow, setProductToShow] = useState({
    title:"",
    price:"",
    description:"",
    images: [],
  })


  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      productToShow,
      setProductToShow,
      cartProducts, 
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      handleDelete
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}