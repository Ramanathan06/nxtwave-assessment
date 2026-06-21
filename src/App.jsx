  import { Routes, Route } from 'react-router-dom'
  import Navbar from './components/Navbar'
  import ProtectedRoute from './components/ProtectedRoute'
  import Home from './pages/Home'
  import ProductDetail from './pages/ProductDetail'
  import Login from './pages/Login'
  import Cart from './pages/Cart'
  
  function App() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </>
    ) 
  } 
  
  export default App
