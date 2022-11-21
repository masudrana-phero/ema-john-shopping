import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header py-4 grid grid-cols-2 gap-4'>
            <img className='logo' src={logo} alt="" />
            <nav className='menu'>
                <div>
                    <a href="/order">Order</a>
                    <a href="/order-review">Order Review</a>
                    <a href="manage-inventory">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;