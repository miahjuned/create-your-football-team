import React from 'react';
import banner from '../../image/top-banner.jpg';
import './header.css';

const Header = () => {
    return (
        <div className= "top-banner">
            <img src={banner} alt="banner"/>
        </div>
    );
};

export default Header;