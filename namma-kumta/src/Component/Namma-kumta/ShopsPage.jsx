import React from "react";
import "./ShopsPage.css";

const ShopsPage = () => {
  return (
    <div className="shops-page">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img
            src="./image/kum-logo.png"
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
            <img src="./image/grocery.png" alt="Grocery Store" />
            Grocery Store
          </li>
          <li>
            <img src="./image/supermarket.png" alt="Supermarket" />
            Supermarket
          </li>
          <li>
            <img src="./image/dress.png" alt="Dress Shop" />
            Dress Shop
          </li>
          <li>
            <img src="./image/shoe.jpg" alt="Shoe Store" />
            Shoe Store
          </li>
          <li>
            <img src="./image/jewelry.png" alt="Jewelry Store" />
            Jewelry Store
          </li>
          <li>
            <img src="./image/tailor.png" alt="Tailor Shop" />
            Tailor Shop
          </li>
          <li>
            <img src="./image/electronics.png" alt="Electronics Store" />
            Electronics Store
          </li>
          <li>
            <img src="./image/mobile.png" alt="Electronics Store" />
            Mobile Repair Shop
          </li>
          <li>
            <img src="./image/car.png" alt="Electronics Store" />
            Car Dealership
          </li>
          <li>
            <img src="./image/auto.png" alt="Electronics Store" />
            Auto Repair Shop
          </li>
          <li>
            <img src="./image/spare.png" alt="Electronics Store" />
            Spare Parts Store
          </li>
          <li>
            <img src="./image/pharm.png" alt="Electronics Store" />
            Pharmacy
          </li>
          <li>
            <img src="./image/optical.png" alt="Electronics Store" />
            Optical Store
          </li>
          <li>
            <img src="./image/baker.png" alt="Electronics Store" />
            Bakery
          </li>
          <li>
            <img src="./image/sweet.png" alt="Electronics Store" />
            Sweet Shop
          </li>
          <li>
            <img src="./image/dairy.png" alt="Electronics Store" />
            Dairy Shop
          </li>
          <li>
            <img src="./image/meat.png" alt="Electronics Store" />
            Meat Shop
          </li>
          <li>
            <img src="./image/liqu.png" alt="Electronics Store" />
            Liquor Store
          </li>
          <li>
            <img src="./image/book.png" alt="Electronics Store" />
            Bookstore
          </li>
          <li>
            <img src="./image/toy.png" alt="Electronics Store" />
            Toy Store
          </li>
          <li>
            <img src="./image/aquarium.png" alt="Electronics Store" />
            Aquarium Store
          </li>
          <li>
            <img src="./image/floris.png" alt="Electronics Store" />
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
