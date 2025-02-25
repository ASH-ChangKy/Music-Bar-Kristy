import React, { useState } from 'react';
import { Layout, Menu, Button, Grid } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { PhoneOutlined, MenuOutlined } from '@ant-design/icons';
import logo from '../assets/images/logo-main2.jpg';

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navigation = () => {
  const screens = useBreakpoint();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // 绑定当前选中的菜单项
  let selectedKey = 'home';
  if (location.pathname === '/about') {
    selectedKey = 'about';
  } else if (location.pathname === '/menu') {
    selectedKey = 'menu';
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = () => {
    if (!screens.md) {
      setMenuOpen(false);
    }
  };

  const menuItems = [
    { key: 'home', label: <Link to="/">Home</Link> },
    { key: 'about', label: <Link to="/about">About us</Link> },
    { key: 'menu', label: <Link to="/menu">Menu</Link> },
  ];

  const contactInfo = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        marginLeft: '20px',
        fontSize: '16px',
      }}
    >
      <a href="tel:+817090959996" style={{ color: '#fff', textDecoration: 'none' }}>
        <PhoneOutlined style={{ fontSize: '20px', marginRight: '5px' }} />
        <span>+81 070 9095 9996</span>
      </a>
    </div>
  );

  return (
    <>
      <Header
        style={{
          backgroundColor: '#111',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          position: 'relative',
        }}
      >
        {/* Logo 点击跳转主页 */}
        <div style={{ marginRight: '20px' }}>
          <Link to="/" style={{ display: 'inline-block', cursor: 'pointer' }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: '50px', height: '50px', transition: 'opacity 0.3s' }}
              onMouseOver={(e) => (e.target.style.opacity = 0.7)}
              onMouseOut={(e) => (e.target.style.opacity = 1)}
            />
          </Link>
        </div>

        {screens.md ? (
          <>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[selectedKey]}
              items={menuItems}
              onClick={handleMenuClick}
              style={{ backgroundColor: '#111', flex: 1 }}
            />
            {contactInfo}
          </>
        ) : (
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <a
              href="tel:+817090959996"
              style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}
            >
              <PhoneOutlined style={{ fontSize: '20px' }} />
            </a>
            <Button
              type="default"
              onClick={toggleMenu}
              icon={<MenuOutlined />}
              style={{
                border: 'none',
                backgroundColor: '#000',
                color: '#fff',
              }}
            />
          </div>
        )}
      </Header>

      {!screens.md && menuOpen && (
        <div style={{ backgroundColor: '#111' }}>
          <Menu
            theme="dark"
            mode="vertical"
            selectedKeys={[selectedKey]}
            items={menuItems}
            onClick={handleMenuClick}
            style={{ backgroundColor: '#111', border: 'none', padding: 0 }}
          />
        </div>
      )}

      <style jsx global>{`
        .ant-menu-dark .ant-menu-item-selected {
          background-color: #222 !important;
          color: #fff !important;
        }
      `}</style>
    </>
  );
};

export default Navigation;
