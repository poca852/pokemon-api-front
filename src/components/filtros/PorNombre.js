import React from 'react'
import { useDispatch } from 'react-redux'
import { abcOrderPokemon } from '../../actions/pokemons'
import './filtros.css';

export const PorNombre = () => {

  const dispatch = useDispatch()

  const filterByName = ({target}) => {
    dispatch(abcOrderPokemon(target.value))
  }

  return (
    <select onChange={e => filterByName(e)}>
      <option>Name</option>
      <option value='asc'>A - Z</option>
      <option value='desc'>Z - A</option>
    </select>
  )
}
