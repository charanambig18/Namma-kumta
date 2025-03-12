import React from "react";
import "./ShopsPage.css";
import nammakumta from "./image/logo-nammakumta.png";
import bell from "./image/bell-icon.png";
import user from "./image/user-logo.png";
import global from "./image/global.png";
import grocery from "./image/grocery-store.png";
import supermarket from "./image/super-market.png";
import dress from "./image/dress-shop.png";
import shoe from "./image/shoe-store.png";
import jewelry from "./image/jewelry-store.png";
import tailor from "./image/tailor-shop.png";
import electronics from "./image/electronic-store.png";

const ShopsPage = () => {
  return (
    <div className="shops-page">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={nammakumta} alt="Namma Kumata Logo" className="logo" />
          <span className="app-name">Namma Kumata</span>
        </div>
        <div className="header-icons">
          <img src={bell} alt="Notifications" />
          <img src={user} alt="User" />
          <img src={global} alt="Global" />
        </div>
      </header>

      {/* Shops Title */}
      <div className="shops-title">
        <img src="./image/slider.png" alt="" />
        <h1>Shops</h1>
      </div>

      {/* Shops List Section */}
      <div className="shops-list">
        <ul>
          <li>
            <img src={grocery} alt="Grocery Store" />
            Grocery Store
          </li>
          <li>
            <img src={supermarket} alt="Supermarket" />
            Supermarket
          </li>
          <li>
            <img src={dress} alt="Dress Shop" />
            Dress Shop
          </li>
          <li>
            <img src={shoe} alt="Shoe Store" />
            Shoe Store
          </li>
          <li>
            <img src={jewelry} alt="Jewelry Store" />
            Jewelry Store
          </li>
          <li>
            <img src={tailor} alt="Tailor Shop" />
            Tailor Shop
          </li>
          <li>
            <img src={electronics} alt="Electronics Store" />
            Electronics Store
          </li>
          <li>
            <img src={electronics} alt="Electronics Store" />
            Electronics Store
          </li>
          <li>
            <img src={electronics} alt="Electronics Store" />
            Electronics Store
          </li>
          <li>
            <img src={electronics} alt="Electronics Store" />
            Electronics Store
          </li>
          <li>
            <img src={electronics} alt="Electronics Store" />
            Electronics Store
          </li>
          <li>
            <img src={electronics} alt="Electronics Store" />
            Electronics Store
          </li>
        </ul>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item active">
          <img src="./image/home.png" alt="Home" className="nav-icon" />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <img src="./image/search-bar.png" alt="Search" className="nav-icon" />
          <span>Search</span>
        </div>
        <div className="nav-item">
          <div className="add-button">
            <img src="./image/add.png" alt="Add" className="nav-icon" />
          </div>
          <span>Add/Join</span>
        </div>
        <div className="nav-item">
          <img src="./image/alert.png" alt="Alerts" className="nav-icon" />
          <span>Alerts</span>
        </div>
      </div>
    </div>
  );
};

export default ShopsPage;
