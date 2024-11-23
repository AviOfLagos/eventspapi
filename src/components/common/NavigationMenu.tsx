import React from 'react';

const NavigationMenu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/guests">Guests</a></li>
        <li><a href="/orders">Orders</a></li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
