import React, { useState } from 'react';
import {
  BsCart3, BsHouseDoor, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill,
  BsGrid,
  BsBarChart,
  BsBarChartSteps,
  BsBarChartFill,
  BsBarChartLineFill,
  BsFillBarChartFill,
  BsFillBarChartLineFill,
  BsWallet2,
  BsBagX,
  BsBagCheck
} from 'react-icons/bs';
import { BiBarChartSquare } from "react-icons/bi";
import { BsClipboardCheck } from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsGrid className='icon_header' />
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className={`sidebar-list-item ${activeItem === 'home' ? 'active' : ''}`}>
          <a href="#" onClick={() => setActiveItem('home')}>
            <BsHouseDoor className={`icon ${activeItem === 'home' ? 'active-icon' : ''}`} />
          </a>
        </li>
        <li className={`sidebar-list-item ${activeItem === 'products' ? 'active' : ''}`}>
          <a href="#" onClick={() => setActiveItem('products')}>
            <BiBarChartSquare   className={`icon ${activeItem === 'products' ? 'active-icon' : ''}`} />
          </a>
        </li>
        <li className={`sidebar-list-item ${activeItem === 'categories' ? 'active' : ''}`}>
          <a href="#" onClick={() => setActiveItem('categories')}>
            <BsClipboardCheck className={`icon ${activeItem === 'categories' ? 'active-icon' : ''}`} />
          </a>
        </li>
        <li className={`sidebar-list-item ${activeItem === 'customers' ? 'active' : ''}`}>
          <a href="#" onClick={() => setActiveItem('customers')}>
            <BsWallet2 className={`icon ${activeItem === 'customers' ? 'active-icon' : ''}`} />
          </a>
        </li>
        <li className={`sidebar-list-item ${activeItem === 'inventory' ? 'active' : ''}`}>
          <a href="#" onClick={() => setActiveItem('inventory')}>
            <BsBagCheck  className={`icon ${activeItem === 'inventory' ? 'active-icon' : ''}`} />
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
