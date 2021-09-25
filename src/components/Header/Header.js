import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/menu">Menu</a>
                <a href="/category">Category</a>
                <a href="/review">Review</a>
            </nav>
        </div>
    );
};

export default Header;