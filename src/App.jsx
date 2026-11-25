import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Contact from "./pages/Contact/Contact";
import Home from './pages/Home/Home';
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";
import PageNotFound from "./pages/NotFound/PageNotFound/PageNotFound";
import Header from "./Components/Header/Header";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import Details from "./pages/ProductDetails/Details";

function App() {
  const [cart, setCart] = useState([]);
  const [lastAddedProduct, setLastAddedProduct] = useState(null);

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
              setLastAddedProduct={setLastAddedProduct}
            />
          }
        />
        <Route path="/blog" element={<Blog />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/products"
          element={
            <Products
              cart={cart}
              setCart={setCart}
              setLastAddedProduct={setLastAddedProduct}
            />
          }
        />

        <Route path="/product-details/:id" element={<Details />} />

        <Route
          path="/products/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              lastAddedProduct={lastAddedProduct}
              setLastAddedProduct={setLastAddedProduct}
            />
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
