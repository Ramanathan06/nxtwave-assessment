import {useState} from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../products'
function Home() {
    const [search, setSearch] =  useState("")
    const filteredProducts =  products.filter((product)=> 
        product.name.toLowerCase().includes(search.toLowerCase())
    )


return (
    <div className="p-8">
    <h1 className = "mb-6 text-3x1 font-bold text-gray-800">ProductHub</h1>
    
    <input
        type="text"
        placeholder='Search products...'
        value={search}
        onChange={(event)=> setSearch(event.target.value)}
        className="mb-6 w-full max-w-sm rounded-md border-gray-300 px-3 py-2"
    />
    <div className="flex flex-wrap gap-4">
        {filteredProducts.map((product)=> (
            <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
            />
        ))}
    </div>
</div>
)
}

export default Home