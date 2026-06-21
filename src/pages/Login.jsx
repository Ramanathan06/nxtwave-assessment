  import { useState } from 'react'
  import { useNavigate } from 'react-router-dom'
  import { useAuth } from '../context/AuthContext'
  
  function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useAuth()
    const navigate = useNavigate()
    
    const handleSubmit = (event) => {
      event.preventDefault()
      login(email)
      navigate("/")
    } 
    
    return (
      <div className="p-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Login</h1>
        <form onSubmit={handleSubmit} className="max-w-sm space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="block w-full rounded-md border border-gray-300 px-3 py-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="block w-full rounded-md border border-gray-300 px-3 py-2"
            required
          />
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold 
  text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    ) 
  } 
  

  export default Login