  import { useParams, Link } from 'react-router-dom'
  import { products } from '../products'
  
  function ProductDetail() {
    const { id } = useParams()
    const product = products.find((p) => p.id === Number(id))
    
    if (!product) {
      return <div className="p-8 text-xl text-gray-800">Product not found.</div>
    } 
    
    return (
      <div className="p-8">
        <Link to="/" className="text-blue-600 hover:underline">← Back to
  products</Link>
        <div className="mt-4 max-w-md">
          <div className="h-64 bg-gray-100 rounded-md mb-4"></div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-500">{product.category}</p>
          <p className="mt-2 text-2xl font-bold text-blue-600">${product.price}</p>
        </div>
      </div>
    )
  }

  export default ProductDetail
