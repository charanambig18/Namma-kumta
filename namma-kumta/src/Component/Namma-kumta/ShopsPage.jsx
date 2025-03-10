
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

const scrollToEnd = () => {
  const lastShop = document.getElementById("pharmacy");
  if (lastShop) {
    lastShop.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const ShopsPage = () => {
  return (
    <div className="shops-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-left">
          <img src={nammakumta} alt="Namma Kumata" className="logo" />
          <span className="title">Namma Kumata</span>
        </div>
        <div className="icons">
          <img src={bell} alt="Notifications" />
          <img src={user} alt="User" className="user" />
          <img src={global} alt="Language" />
        </div>
      </header>

      {/* Shops List Section */}
      <div className="shops-list">
        <h2 className="shops-title">Shops</h2>
        <ul>
          <li onClick={scrollToEnd}>
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
            <img src={electronics} alt="Mobile Repair Shop" />
            Mobile Repair Shop
          </li>
          <li>
            <img src={electronics} alt="Car Dealership" />
            Car Dealership
          </li>
          <li>
            <img src={electronics} alt="Auto Repair Shop" />
            Auto Repair Shop
          </li>
          <li>
            <img src={electronics} alt="Spare Parts Store" />
            Spare Parts Store
          </li>
          <li id="pharmacy">
            <img src={electronics} alt="Pharmacy" />
            Pharmacy
          </li>
        </ul>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item">
          <i className="home-icon"></i> Home
        </div>
        <div className="nav-item">
          <i className="search-icon"></i> Search
        </div>
        <div className="nav-item">
          <i className="add-icon"></i> Add/Join
        </div>
        <div className="nav-item">
          <i className="alert-icon"></i> Alerts
        </div>
      </nav>
    </div>
  );
};

export default ShopsPage;
