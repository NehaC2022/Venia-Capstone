import './App.css';
import './SCSS/index.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Product from './Component/Product/product';
import Home from './Component/Product/Home';
import ShoppingCart from './Component/ShoppingCart/ShoppingCart';
// import Home from './Layout/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/products/:id" element = {<Product/>}/>
          <Route exact path = "/cart" element = {<ShoppingCart/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
