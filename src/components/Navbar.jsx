  import { Link } from 'react-router-dom'
  import { useAuth } from '../context/AuthContext'
  import { useCart } from '../context/CartContext'
  
  function Navbar() {
    const { user, logout } = useAuth()
    const { cart } = useCart()
    
    return (
      <nav className="flex items-center justify-between border-b border-gray-200 px-8 
  py-4">
        <Link to="/" className="text-xl font-bold text-gray-800">ProductHub</Link>
        <div className="flex items-center gap-4">
          <Link to="/cart" className="text-gray-700 hover:underline">Cart
  ({cart.length})</Link>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-600">{user.email}</span>
              <button onClick={logout} className="text-blue-600 
  hover:underline">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          )}
        </div>
      </nav>
    ) 
  } 
  
  export default Navbar
