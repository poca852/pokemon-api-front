import React from 'react'
import { useDispatch } from 'react-redux'
import { attackOrderPokemon } from '../../actions/pokemons';
import './filtros.css';

export const PorAtaque = () => {

  const dispatch = useDispatch()

  const filterByAttack = ({target}) => {
    if(target.value === 'nothing') return;
    dispatch(attackOrderPokemon(target.value))
  }

  return (
    <select onChange={e => filterByAttack(e)}>
      <option value='nothing'>For Attack</option>
      <option value='higth'>+ Attack</option>
      <option value='low'>- Attack</option>
    </select>
  )
}
