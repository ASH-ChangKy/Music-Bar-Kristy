import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";

function App() {
  return (
      <HashRouter>
          <nav>
              <Link to="/">主页</Link>
              <Link to="/about">关于我们</Link>
              <Link to="/menu">菜单</Link>
          </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
          </Routes>
      </HashRouter>
  );
}

export default App;
