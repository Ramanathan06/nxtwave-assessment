import { useCart } from '../context/CartContext'
  
  function Cart() {
    const { cart, removeFromCart } = useCart()
    
    if (cart.length === 0) {
      return (
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
          <p className="mt-2 text-gray-500">Your cart is empty.</p>
        </div>
      ) 
    } 
    
    return (
      <div className="p-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Your Cart
  ({cart.length})</h1>
        <div className="max-w-md space-y-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-md border 
  border-gray-200 p-4"
            >
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              > 
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }

  export default Cart
