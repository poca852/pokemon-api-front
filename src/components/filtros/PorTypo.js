import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { typeSearchPokemon } from '../../actions/pokemons';
import './filtros.css';

export const PorTypo = () => {

  const dispatch = useDispatch();
  const { typesPokemons } = useSelector(state => state.pokemons);

  const filterBytype = ({target}) => {
    dispatch(typeSearchPokemon(target.value))
  }

  return (
    <select onChange={e => filterBytype(e)}>
      <option value='all'>All Types</option>
      {
        typesPokemons.map(type => (
          <option value={type.name} key={type.id}>{type.name}</option>
        ))
      }
    </select>
  )
}
