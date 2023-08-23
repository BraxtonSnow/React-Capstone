import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/pages/Home";
import ProductsPage from "./components/pages/Products";
import CartPage from "./components/pages/Cart";
import AboutPage from "./components/pages/About";
import ContactPage from "./components/pages/Contact";
import NavBar from "./components/navigations/NavBar";
import Product from "./components/pages/Product";
import "./App.scss";
import "./media-queries.scss";

export default function App() {
  const [cartArray, setCartArray] = useState([]);
  const [productId, setProductId] = useState("");
  const [number, setNumber] = useState(1);

  function addNumber() {
    setNumber((preState) => preState + 1);
  }

  function subtractNumber(id) {
    if (number !== 1) {
      setNumber((preState) => preState - 1);
      cartArray.forEach((item) => {
        console.log(item);
        if (item.id === id) {
          console.log(item);
        }
      });
    }
  }

  return (
    <div className="app">
      <div className="header-container">
        <h1>The Great Shopping</h1>
        <img
          className="my-logo-content"
          alt="Are You Stuck? 10 Best Logo Ideas to Get You out of Designer's Block"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLD2MsEGLOAkItHRxJ77PWsm6Jwv2Log8DAA&amp;usqp=CAU"
        ></img>
      </div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/products"
            render={(routeProps) => (
              <ProductsPage
                {...routeProps}
                cartArray={cartArray}
                setCartArray={setCartArray}
                setProductId={setProductId}
              />
            )}
          />
          <Route
            exact
            path="/products/:slug"
            render={() => <Product productId={productId} number={1} />}
          />

          <Route
            exact
            path="/cart"
            render={(routeProps) => (
              <CartPage
                {...routeProps}
                cartArray={cartArray}
                setCartArray={setCartArray}
                setProductId={setProductId}
                number={number}
                subtractNumber={subtractNumber}
              />
            )}
          />
          <Route
            exact
            path="/cart/:slug"
            render={() => (
              <Product
                productId={productId}
                subtractNumber={subtractNumber}
                addNumber={addNumber}
                setNumber={setNumber}
                number={number}
              />
            )}
          />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </BrowserRouter>
      <div className="footer-container">
        <div>
          <h5> Address: 1600 W. 324 N.</h5>
          <h5>Phone: 324-354-1798</h5>
          <h5>The Great Shopping</h5>
        </div>
        <h3>Footer</h3>
      </div>
    </div>
  );
}
