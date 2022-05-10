import React from 'react';
import { useDispatch } from 'react-redux';
import { removeLoading, setLoading } from '../../actions/pokemons';
import './Paginacion.css'

export const Paginacion = ({ pagina, setPagina, maximo }) => {

  const dispatch = useDispatch()

  const prev = () => {
    dispatch(setLoading())
    if(pagina > 1){
      setPagina(pagina - 1)
    }
    dispatch(removeLoading())
  }

  const next = () => {
    dispatch(setLoading())
    if(pagina < maximo){
      setPagina(pagina + 1)
    }
    dispatch(removeLoading())
  }

  return (
    <div className='container-btn'>
      <button className='btn-page' onClick={prev}>Prev</button>
      <button className='btn-page' onClick={next}>Next</button>
    </div>
  )
}
