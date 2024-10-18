// src/components/Header.js
import React from 'react';
import './Header.css';
import { FaPhone, FaShoppingCart, FaUserAlt, FaClipboardList, FaMapMarkerAlt } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      {/* Hàng trên cùng: Logo, thanh tìm kiếm và các biểu tượng */}
      <div className="top-row">
        <div className="logo">
          <a href="/">Fior Di Saigon</a>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="bạn cần tìm sản phẩm gì?" />
          <button className="search-button">
            <FaPhone size={16} />
          </button>
        </div>

        <div className="header-icons">
          {/* Mỗi mục icon + text trong thẻ <a> */}
          <a href="/orders" className="icon-item">
            <FaClipboardList size={30} />
            <span>Đơn hàng</span>
          </a>
          <a href="/stores" className="icon-item">
            <FaMapMarkerAlt size={30} />
            <span>Cửa hàng</span>
          </a>
          <a href="/account" className="icon-item">
            <FaUserAlt size={30} />
            <span>Tài khoản</span>
          </a>
          <a href="/cart" className="icon-item cart-icon">
            <FaShoppingCart size={30} />
            <span>Giỏ hàng</span>
            <span className="cart-count">0</span>
          </a>
        </div>
      </div>

      {/* Hàng dưới cùng: Menu điều hướng */}
      <nav className="bottom-row">
        <a href="/">Trang Chủ</a>
        <a href="/products">Menu Kem</a>
        <a href="/pints">Bắc gay béo</a>
        <a href="/jars">Bắc gay béo</a>
        <a href="/cones">Bắc gay béo</a>
        <a href="/drinks">Bắc gay béo</a>
        <a href="/contact">Bắc gay béo</a>
        <a href="/partners">Bắc gay béo</a>
      </nav>
    </header>
  );
}

export default Header;
