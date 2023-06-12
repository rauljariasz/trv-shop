import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"

function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => (
      setItems(data)
    ))
  }, [])

  return (
    <>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(item => (
            <Card 
              key={item.id}
              data={item}
            />
          ))
        }
      </div>
      <ProductDetail/>
    </>
  )
}

export default Home
