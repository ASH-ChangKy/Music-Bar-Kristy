import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import HomeNavigation from './components/HomeNavigation';
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import 'antd/dist/reset.css';
import Navigation from "./components/HomeNavigation";
import Footer from "./components/footer";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/article/:id" element={<ArticleDetail />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}

export default App;
