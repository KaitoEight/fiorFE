import React from 'react';
import './Sidebar.css'; // Nhớ tạo file CSS và đổi tên cho đúng

const Sidebar = () => {
    return (
        <div class="menu-wrapper">
        <div class="sidebar">
            <h2><i class="fas fa-bars"></i> DANH MỤC SẢN PHẨM</h2>
            <ul class="navigation">
                <li class="menu-item"><i class="fas fa-home"></i><a href="#">Trang chủ</a></li>
                <li class="menu-item"><i class="fas fa-birthday-cake"></i><a href="#">Bánh Kem Lạnh</a><i class="fas fa-chevron-right icon-right"></i></li>
                <li class="menu-item"><i class="fas fa-ice-cream"></i><a href="#">Hũ Kem Pint 270Gr</a></li>
                <li class="menu-item"><i class="fas fa-ice-cream"></i><a href="#">Hũ Kem Jar</a></li>
                <li class="menu-item"><i class="fas fa-ice-cream"></i><a href="#">Bánh Ốc Quế</a></li>
                <li class="menu-item"><i class="fas fa-coffee"></i><a href="#">Trà & Trà Sữa</a></li>
                <li class="menu-item"><i class="fas fa-newspaper"></i><a href="#">Tin Tức</a></li>
                <li class="menu-item"><i class="fas fa-truck"></i><a href="#">Giao hàng đúng giờ</a></li>
                <li class="menu-item"><i class="fas fa-tools"></i><a href="#">Miễn phí đổi trả</a></li>
            </ul>
            <div class="contact">
                <i class="fas fa-phone"></i> Gọi mua hàng: 0938381717<br/>
                (10:00 - 21:00 T2 - CN)
            </div>
        </div>
    </div>
    );
};

export default Sidebar;
