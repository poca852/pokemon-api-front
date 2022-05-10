import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Pokemon-logo.png';
import pikachu from '../../assets/pikachu-circle.png';
import './welcome.css';

export const WelcomeScreen = () => {
  return (
    <div className='welcome__container'>
      <div className='welcome__logo'>
        <img src={logo} alt='logo de pokemon' />
        <button>
          <NavLink to={`/home`}>START</NavLink>
        </button>
      </div>
      <div className='welcome__pikachu'>
        <img src={pikachu} alt='pikachu' />
      </div>
    </div>
  )
}
