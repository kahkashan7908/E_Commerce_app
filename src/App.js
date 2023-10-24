import React,{ useState } from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import Navbar from './components/Navbar';
import { products } from './data/products';

function App() {

const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
  const existingItem = cartItems.find(item => item.id === product.id);

  if (existingItem) {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
  }

};


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/"  element={<HomePage products={products}/>} />
        <Route exact path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart}/>} />
        <Route exact path="/cart" element={<Cart cartItems={cartItems}/>} />
        <Route exact path="/register" element={<UserRegistration/>} />
        <Route exact path="/login" element={<UserLogin/>} />
      </Routes>
    </Router>
  );
}

export default App;

