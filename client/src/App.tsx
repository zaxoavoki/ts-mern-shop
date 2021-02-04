import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Category from "./pages/Category";

function App(): React.ReactElement {
    return (
        <Router>
            <Header />
            <main className="container mb-4">
                <Route exact path="/" component={Home} />
                <Route exact path="/category" component={Category} />
            </main>
            <Footer />
        </Router>
    );
}

export default App;
