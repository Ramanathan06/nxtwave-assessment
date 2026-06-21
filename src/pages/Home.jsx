 import { useState } from 'react' 
  import ProductCard from '../components/ProductCard'
  import { products } from '../products'

  function Home() {
    const [search, setSearch] = useState("")
  
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Discover Great Products</h1>
          <p className="mt-2 text-gray-500">Browse our collection and find your favourites</p>
        </div>

        <div className="mb-10 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full max-w-md rounded-full border border-gray-300 px-5 py-3 shadow-sm
  focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div> 

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        )}  
      </div>
    )
  }

  export default Home
