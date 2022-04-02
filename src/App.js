import React from 'react';
import './App.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  return (
    <div className="App">
      <div className="header_logo">
        <StorefrontIcon className="" fontSize="large"/>
        <h2 className="">Mystic Bazaar</h2>
      </div>

      <div className="header_search"></div>
        <input type="text" className=""></input>
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
          <ShoppingBasketIcon fontSize="large"/>
          <span className="nav_itemLineTwo">0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
