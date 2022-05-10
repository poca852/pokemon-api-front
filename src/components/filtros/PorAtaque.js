import React from 'react'
import { useDispatch } from 'react-redux'
import { attackOrderPokemon } from '../../actions/pokemons';
import './filtros.css';

export const PorAtaque = () => {

  const dispatch = useDispatch()

  const filterByAttack = ({target}) => {
    dispatch(attackOrderPokemon(target.value))
  }

  return (
    <select onChange={e => filterByAttack(e)}>
      <option>Attack</option>
      <option value='poderoso'>+ Attack</option>
      <option value='debil'>- Attack</option>
    </select>
  )
}
