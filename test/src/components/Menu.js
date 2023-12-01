import React from 'react';
import navbar from './navbar'; 
import SearchButton from './SearchButton'; 

const Menu = () => {
  
  const menuItems = [
    { id: 1, name: 'Plato 1', price: '$10.99' },
    { id: 2, name: 'Plato 2', price: '$12.99' },
    { id: 3, name: 'Plato 3', price: '$8.99' },
   
  ];

  return (
    <div>
      <Navbar />
      <SearchButton />
      <HomeButton />

      <div className="menu-container">
        <h2>Menú Virtual</h2>
        <ul>
          {menuItems.map((item) => (
            <MenuItem key={item.id} name={item.name} price={item.price} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
