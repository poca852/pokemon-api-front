import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons, getTypes } from '../../actions/pokemons';
import { CardPokemon } from '../../components/card-pokemon/CardPokemon';
import { PorAtaque } from '../../components/filtros/PorAtaque';
import { PorNombre } from '../../components/filtros/PorNombre';
import { PorOrigen } from '../../components/filtros/PorOrigen';
import { PorTypo } from '../../components/filtros/PorTypo';
import { Refresh } from '../../components/filtros/Refresh';
import { Loading } from '../../components/loading/Loading';
import { Paginacion } from '../../components/paginacion/Paginacion';
import { NavBar } from '../../ui/NavBar';
import './home.css';

export const HomeScreen = () => {

  const dispatch = useDispatch()
  const [pagina, setPagina] = useState(1);
  const { filterPokemons } = useSelector(state => state.pokemons);
  const { loading, msgError } = useSelector(state => state.ui);

  useEffect(() => {
    dispatch(getAllPokemons())
    dispatch(getTypes())
  }, [dispatch])

  const maximo = Math.ceil(filterPokemons.length / 12)

  const pokemonsFilter = () => {
    const pokemonsFiltrados = filterPokemons.slice(
      (pagina - 1) * 12,
      (pagina - 1) * 12 + 12
    );
    return pokemonsFiltrados;
  };


  return (
    <div className={`home ${msgError && 'no-found'}`}>
      <NavBar />
      <div className='home__main'>
        <div className='filtros'>
          <div className='select'>
            <PorTypo />
            <PorNombre />
            <PorAtaque />
            <PorOrigen />
            <Refresh />
          </div>
        </div>

        {
          loading
            ? <Loading />
            : <div className='grid-pokemons'>
                {
                  msgError 
                    ? <h1>{msgError}</h1>
                    :
                    pokemonsFilter()?.map(poke => (
                      <CardPokemon key={poke.name} {...poke} />
                    ))
                }
              </div>
        }
        {
          (!loading && !msgError) && <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
        }
      </div>

    </div>
  )
}
