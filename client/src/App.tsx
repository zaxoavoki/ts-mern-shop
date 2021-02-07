import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Category from "./pages/Category";
import Settings from "./pages/Settings";

import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App(): React.ReactElement {
  return (
    <Router>
      <Header />
      <main className="container mb-4 h-100">
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/settings/:action" component={Settings} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
