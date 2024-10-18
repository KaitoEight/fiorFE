// src/pages/Homepage.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// import './Homepage.css'; // Nếu bạn muốn thêm style cho Homepage

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <main style={{ display: 'flex', marginTop: '20px' }}> {/* Sử dụng flex để sắp xếp sidebar và nội dung */}
        <Sidebar />
        <div style={{ marginLeft: '30px', padding: '20px', flex: 1 }}> {/* Nội dung chính bên cạnh sidebar */}
          <h1>Chào mừng đến với Snowee Gelato!</h1>
          {/* Nội dung khác của trang */}
        </div>
      </main>
    </div>
  );
}

export default Homepage;
