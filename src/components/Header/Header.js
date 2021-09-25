import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/shop">Menu</a>
                <a href="/order">Category</a>
                <a href="/inventory">Review</a>
            </nav>
        </div>
    );
};

export default Header;