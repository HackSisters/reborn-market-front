import React from 'react'
import CardProduct from './components/CardProduct'

function App() {
  return (
    <>
      <h1 className="text-red-500"> Hello React + Tailwind </h1>
      <div className="p-4">
      <CardProduct
        image="https://example.com/image.jpg"
        title="Vestido largo"
        price="100 $"
        />
      </div>
    </>
  )
}

export default App
