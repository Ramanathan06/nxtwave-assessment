  import { Link } from 'react-router-dom'
  import { useAuth } from '../context/AuthContext'
  
  function Navbar() {
    const { user, logout } = useAuth()
    
    return (
      <nav className="flex items-center justify-between border-b border-gray-200 px-8 
  py-4">
        <Link to="/cart" className="text-gray-700 hover:underline">Cart</Link>

        <div> 
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
