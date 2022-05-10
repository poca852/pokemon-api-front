import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search } from '../components/search/Search';
import './navbar.css';

export const NavBar = () => {
   return (
      <nav>
         <div className='menu'>
            <NavLink to='/'>Exit</NavLink>
            <NavLink to='/nuevo'>New Pokemon</NavLink>
         </div>
         <div className='search'>
            <Search />
         </div>
      </nav>
   )
}
