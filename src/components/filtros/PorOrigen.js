import React from 'react';
import { useDispatch } from 'react-redux';
import { apiOrDbCreatedPokemon } from '../../actions/pokemons';
import './filtros.css';


export const PorOrigen = () => {

  const dispatch = useDispatch();
  
  const filterByOrigin = ({target}) => {
    dispatch(apiOrDbCreatedPokemon(target.value))
  }

  return (
    <select onChange={e => filterByOrigin(e)}>
      <option>Api o Db</option>
      <option value='api'>Api</option>
      <option value='db'>Db</option>
    </select>
  )
}
