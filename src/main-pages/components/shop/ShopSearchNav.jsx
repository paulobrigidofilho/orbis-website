import React from 'react'

const ShopSearchNav = () => {
    return (
      <section id="shop-intro-section">
        <div>
          <h1 className="bigHead">Welcome to Orbis Shop</h1>
        </div>
        <div id="search-items">
          <input id="searchProduct" type="text" placeholder="Search" maxLength="100" />
          <button id="searchButton" className="fa-solid fa-magnifying-glass"></button>
        </div>
      </section>
    );
  };
  
  export default ShopSearchNav;