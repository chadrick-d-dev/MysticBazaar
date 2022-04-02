import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <StorefrontIcon className="store_icon" fontSize="large" />
        <h2 className="title">Mystic Bazaar</h2>
      </div>

      <div className="header_search">
        <input type="text" className="search_input"></input>
        <SearchIcon className="search_icon" fontsize="large" />
      </div>
      
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign In</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Bazaar</span>
        </div>
        <div className="nav_item">
          <ShoppingBasketIcon className="basket_icon" fontSize="large" />
          <span className="nav_itemLineTwo nav_basketCount">0</span>
        </div>
      </div>
    </div>
  )
}

export default Header;