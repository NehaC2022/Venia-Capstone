import './App.css';
import './SCSS/index.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Product from './Component/Product/product';
import ProductHome from './Component/Product/ProductHome';
import ShoppingCart from './Component/ShoppingCart/ShoppingCart';
import Home from './Layout/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/producthome" element = {<ProductHome/>}/>
          <Route exact path = "/products/:id" element = {<Product/>}/>
          <Route exact path = "/cart" element = {<ShoppingCart/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
