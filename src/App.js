import React from "react";
import HomePage from "./pages/homepage/homepage";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import ShopPage from "./pages/shop/shop-component";
const Hat = () => {
  return <h1> This is hat</h1>;
};
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
