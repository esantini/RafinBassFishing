import { useState, useEffect, useCallback } from 'react';

import MenuItem from './MenuItem'

const menuItems = [
  { id: 'home', title: "HOME" },
  { id: 'about', title: "ABOUT US" },
  { id: 'location', title: "LOCATION" },
  { id: 'gallery', title: "GALLERY" },
  { id: 'faq', title: "F.A.Q." },
  { id: 'booking', title: "BOOKING & CONTACT INFO" },
];

const menuList = menuItems.map((e, i) =>
  <MenuItem item={e} key={`menuitem_${i}`} />
);

const Menu = () => {
  return (
    <ul className="nav_list">
      {menuList}
    </ul>
  );
}

export default Menu;
