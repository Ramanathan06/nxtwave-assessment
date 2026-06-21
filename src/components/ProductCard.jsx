  import { Link } from 'react-router-dom'
  
  function ProductCard(props) {
    return (
      <Link to={`/products/${props.id}`} className="group block">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm 
  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="aspect-[4/3] overflow-hidden bg-gray-100">
            <img
              src={props.image}
              alt={props.name}
              className="h-full w-full object-cover transition-transform duration-300 
  group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <span className="inline-block rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium 
  text-blue-600">
              {props.category}
            </span>
            <h2 className="mt-2 text-lg font-semibold text-gray-900">{props.name}</h2>
            <p className="mt-1 text-xl font-bold text-gray-900">${props.price}</p>
          </div>
        </div> 
      </Link>
    )
  }

  export default ProductCard
