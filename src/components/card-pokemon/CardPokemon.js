import React from 'react';
import { Link } from 'react-router-dom';
import { toCamelCase } from '../../helpers/calmelCase';
import './CardPokemon.css';

export const CardPokemon = ({ name, img, types, id }) => {

  return (
    <Link to={`pokemon/${id}`}>
      <div className='card-pokemon'>

        <img src={img} alt={name} />
        <h3>{toCamelCase(name)}</h3>
        <p className='tipos'>
          {
            types.map(type => (
              `${toCamelCase(type.name)} / `
            ))
          }
        </p>
      </div>
    </Link>
  )
}
