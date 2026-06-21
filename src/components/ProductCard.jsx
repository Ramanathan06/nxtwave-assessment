function ProductCard(props) {
    return (
        <div className = "border border-gray-200 rounded-lg p-4 shadow-sm w=64">
            <div className = "h-40 bg-gray-100 rounded-md mb-3"></div>
            <h2 className = "text-lg font-semibold text-gray-800">{props.name}</h2>
            <p className = "text-sm text-gray-500">{props.category}</p>
            <p className = "mt-2 font-bold text-blue-600">${props.price}</p>
        </div>
    )
    
}

export default ProductCard