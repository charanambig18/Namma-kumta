import React from "react";
import "./ShopsPage.css";

const ShopsPage = () => {
  return (
    <div className="shops-page">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img
            src="./image/logo-nammakumta.png"
            alt="Namma Kumata Logo"
            className="logo"
          />
          <span className="app-name">Namma Kumata</span>
        </div>
        <div className="header-icons">
          <img src="./image/bell-icon.png" alt="Notifications" />
          <img src="./image/user-logo.png" alt="User" />
          <img src="./image/global.png" alt="Global" />
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
            <img src="./image/grocery-store.png" alt="Grocery Store" />
            Grocery Store
          </li>
          <li>
            <img src="./image/super-market.png" alt="Supermarket" />
            Supermarket
          </li>
          <li>
            <img src="./image/dress-shop.png" alt="Dress Shop" />
            Dress Shop
          </li>
          <li>
            <img src="./image/shoe-store.png" alt="Shoe Store" />
            Shoe Store
          </li>
          <li>
            <img src="./image/jewelry-store.png" alt="Jewelry Store" />
            Jewelry Store
          </li>
          <li>
            <img src="./image/tailor-shop.png" alt="Tailor Shop" />
            Tailor Shop
          </li>
          <li>
            <img src="./image/electronic-store.png" alt="Electronics Store" />
            Electronics Store
          </li>
          <li>
            <img src="./image/mobile-repair-shop.png" alt="Electronics Store" />
            Mobile Repair Shop
          </li>
          <li>
            <img src="./image/car-dealership.png" alt="Electronics Store" />
            Car Dealership
          </li>
          <li>
            <img src="./image/auto-repair-shop.png" alt="Electronics Store" />
            Auto Repair Shop
          </li>
          <li>
            <img src="./image/spare-parts-store.png" alt="Electronics Store" />
            Spare Parts Store
          </li>
          <li>
            <img src="./image/pharmacy.png" alt="Electronics Store" />
            Pharmacy
          </li>
          <li>
            <img src="./image/optical-store.png" alt="Electronics Store" />
            Optical Store
          </li>
          <li>
            <img src="./image/bakery.png" alt="Electronics Store" />
            Bakery
          </li>
          <li>
            <img src="./image/sweet-shop.png" alt="Electronics Store" />
            Sweet Shop
          </li>
          <li>
            <img src="./image/dairy-shop.png" alt="Electronics Store" />
            Dairy Shop
          </li>
          <li>
            <img src="./image/meat-shop.png" alt="Electronics Store" />
            Meat Shop
          </li>
          <li>
            <img src="./image/liquor-store.png" alt="Electronics Store" />
            Liquor Store
          </li>
          <li>
            <img src="./image/bookstore.png" alt="Electronics Store" />
            Bookstore
          </li>
          <li>
            <img src="./image/toy-store.png" alt="Electronics Store" />
            Toy Store
          </li>
          <li>
            <img src="./image/aquarium-store.png" alt="Electronics Store" />
            Aquarium Store
          </li>
          <li>
            <img src="./image/florist.png" alt="Electronics Store" />
            Florist
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
