import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { clearActivePokemon, searchPokemonById } from '../../actions/pokemons';
import './pokemon.css';

export const Pokemon = () => {
   const { id } = useParams();
   const dispatch = useDispatch();
   const { activePokemon, loading } = useSelector(state => state.pokemons)

   useEffect(() => {
      dispatch(searchPokemonById(id));
   }, [dispatch, id])

   const history = useHistory();

   const handleVolver = () => {
      dispatch(clearActivePokemon())
      history.goBack()
   }

   if (loading) {
      return <h1>Cargando</h1>
   }
   return (
      <div className='container'>
         <div>
            <div className='id'>
               #{activePokemon.id}
            </div>

            <div className='title'>
               <h1>{activePokemon.name}</h1>
            </div>

            <div className='img'>
               <img src={activePokemon?.img} alt={activePokemon?.img} />
            </div>

            <div className='stats'>
               <h3>Stats</h3>
               <div className='container-stats'>
                  <h3>Hp</h3>
                  <progress max='250' value={activePokemon.hp}></progress>
                  <p>{activePokemon.hp}</p>
               </div>

               <div className='container-stats'>
                  <h3>Attack</h3>
                  <progress max='250' value={activePokemon.attack}></progress>
                  <p>{activePokemon.attack}</p>
               </div>

               <div className='container-stats'>
                  <h3>Defense</h3>
                  <progress max='250' value={activePokemon.defense}></progress>
                  <p>{activePokemon.defense}</p>
               </div>

               <div className='container-stats'>
                  <h3>Speed</h3>
                  <progress max='250' value={activePokemon.speed}></progress>
                  <p>{activePokemon.speed}</p>
               </div>

               <div className='container-stats'>
                  <h3>Height</h3>
                  <progress max='250' value={activePokemon.height}></progress>
                  <p>{activePokemon.height} Cms</p>
               </div>

               <div className='container-stats'>
                  <h3>Weight</h3>
                  <progress max='250' value={activePokemon.weight}></progress>
                  <p>{activePokemon.weight} Kg</p>
               </div>
            </div>

            <button onClick={handleVolver}>Back</button>
         </div>
      </div>
   )
}
