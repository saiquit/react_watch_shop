import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// components
import HomePage from "./Pages/Home/Home";
import ShopPage from "./Pages/Shop/ShopPage";
import CheckOutPage from "./Pages/CheckOutPage/CheckoutPage";
import AccountPage from "./Pages/AccountPage/AccountPage";
import SingleProduct from "./Pages/SingleProduct/SingleProductPage";
// Pages
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} exact />
        <Route path="/checkout" component={CheckOutPage} exact />
        <Route path="/account" component={AccountPage} exact />
        <Route path="/shop/:id" component={SingleProduct} exact />
      </Switch>
    </div>
  );
}

export default App;
