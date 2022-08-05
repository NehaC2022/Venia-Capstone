import './App.css';
import './SCSS/index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Product from './Component/Product/product';
import ProductHome from './Pages/ProductHome/ProductHome';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import Home from './Layout/Home';
import Checkout from './Pages/CheckOut/Checkout';
import OrderConfirmation from './Pages/OrderConfirmation/OrderConfirmation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/producthome" element={<ProductHome />} />
        <Route exact path="/producthome/womensClothing" element={<ProductHome />} />
        <Route exact path="/producthome/mensClothing" element={<ProductHome />} />
        <Route exact path="/producthome/electronics" element={<ProductHome />} />
        <Route exact path="/producthome/jwellery" element={<ProductHome />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/cart" element={<ShoppingCart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/orderConfirmation" element={<OrderConfirmation/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
