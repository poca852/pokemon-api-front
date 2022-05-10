import { types } from "../types/types";

export const getAllPokemons = () => {
   return async(dispatch) => {
      dispatch(setLoading())
      const pokemonsInLocalStorage = JSON.parse(localStorage.getItem('pokemons'))
      if(pokemonsInLocalStorage === null){
         const resp = await fetch('http://167.99.208.143/api/pokemons');
         const data = await resp.json();
         localStorage.setItem('pokemons', JSON.stringify(data.allPokemons));
         dispatch({type: types.loadAllPokemons, payload: data.allPokemons});
      }else{
         dispatch({type: types.loadAllPokemons, payload: pokemonsInLocalStorage});
      }
      dispatch(removeLoading())
   }
}

export const getTypes = () => {
   return async(dispatch) => {
      const resp = await fetch('http://167.99.208.143/api/pokemons/types');
      const typesPokemons = await resp.json();
      if(types){
         dispatch({type: types.getTypes, payload: typesPokemons})
      }
   }
}

export const searchPokemon = (pokemon) => {
   return async(dispatch) => {
      dispatch(setLoading())
      dispatch(removeMsgError())
      const resp = await fetch(`http://167.99.208.143/api/pokemons?name=${pokemon}`)
      const pokemonResp = await resp.json(); 
      if(pokemonResp.ok){
         dispatch({type: types.searchPokemon, payload: pokemonResp.pokemonByName})
      }else{
         dispatch(setMsgError(pokemonResp.msg))
      }
      dispatch(removeLoading())
   }
}

export const typeSearchPokemon = (type) => {
   return (dispatch) => {
      dispatch(setLoading())
      dispatch(removeMsgError())
      dispatch({type: types.typeSearchPokemon, payload: type})
      dispatch(removeLoading())
   }
}

export const searchPokemonById = (id) => {
   return async(dispatch) => {
      dispatch(setLoading())
      dispatch(removeMsgError())
      const resp = await fetch(`http://167.99.208.143/api/pokemons/${id}`)
      const pokemon = await resp.json()
      if(pokemon.ok) {
         dispatch({type: types.searchPokemonById, payload: pokemon.pokemon})
      }else{
         dispatch(setMsgError(pokemon.msg))
      }
      dispatch(removeLoading());
   }
}

export const clearActivePokemon = () => {
   return (dispatch) => {
      dispatch({type: types.clearActivePokemon})
   }
}

export const abcOrderPokemon = (payload) => {
   return (dispatch) => {
      dispatch(setLoading())
      dispatch(removeMsgError())
      dispatch({type: types.abcOrderPokemon, payload})
      dispatch(removeLoading())
   }
}

export const attackOrderPokemon = (payload) => {
   return (dispatch) => {
      dispatch(setLoading())
      dispatch(removeMsgError())
      dispatch({type: types.attackOrderPokemon, payload})
      dispatch(removeLoading())
   }
}

export const apiOrDbCreatedPokemon = (payload) => {
   return (dispatch) => {
      dispatch(setLoading())
      dispatch(removeMsgError())
      dispatch({type: types.apiOrDbCreatedPokemon, payload})
      dispatch(removeLoading())
   }
}

export const createPokemon = (pokemon) => {
   return async(dispatch) => {
      dispatch(setLoading())
      dispatch(removeMsgError())
      dispatch(removeMsg())
      const resp = await fetch(`http://167.99.208.143/api/pokemons`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(pokemon)
      })
      const data = await resp.json()
      if(data.ok){
         dispatch({type: types.createPokemon})
         dispatch(setMsg('Pokemon Created'))
      }else{
         dispatch(setMsgError(data.msg))
      }
      dispatch(removeLoading())
   }
}

export const setLoading = () => ({
   type: types.uiSetLoading
})

export const removeLoading = () => ({
   type: types.uiRemoveLoading
})

export const setMsgError = (payload) => ({
   type: types.uiSetMsgError,
   payload
})
export const removeMsgError = () => ({ type: types.uiRemoveMsgError })

export const setMsg = (payload) => {
   return {
      type: types.uiSetMsg,
      payload
   }
}

export const removeMsg = () => ({type: types.uiRemoveMsg})

export const refreshAllPokemons = () => {
   return (dispatch) => {
      dispatch(removeLoading())
      dispatch(removeMsg())
      dispatch(removeMsgError())
      dispatch({type: types.refreshAllPokemon})
   }
}