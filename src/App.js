import React, { Component } from "react";
import HomePage from "./pages/homepage/homepage";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import ShopPage from "./pages/shop/shop-component";

import SignInSignup from "./pages/signIn-signUp/signIn-signUp";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
