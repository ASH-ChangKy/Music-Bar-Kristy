import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer style={{
            textAlign: "center",
            backgroundColor: "#111",
            color: "#fff",
            padding: "15px 0",
            fontSize: "0.9rem",
            borderTop: "1px solid #444",
            boxShadow: "0 -2px 5px rgba(255,255,255,0.1)"
        }}>
            {/* 导航栏 */}
            <nav style={{ marginBottom: "10px" }}>
                <Link to="/" style={linkStyle}>🏠 Home</Link> | 
                <Link to="/about" style={linkStyle}> ℹ️ About us</Link> | 
                <Link to="/menu" style={linkStyle}> 🍸 Menu</Link>
            </nav>

            {/* 版权信息 */}
            <p style={{ margin: "5px 0" }}>Music Bar Kristy ©2025 Created by Cky</p>
        </footer>
    );
}

// 统一的导航链接样式
const linkStyle = {
    color: "rgb(255, 255, 255)",
    textDecoration: "none",
    margin: "0 10px",
    fontWeight: "bold"
};

export default Footer;
