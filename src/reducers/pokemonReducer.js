import { types } from "../types/types";

const initialState = {
   allPokemons: [],
   filterPokemons: [],
   typesPokemons: [],
   activePokemon: {},
};

export const pokemonReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.loadAllPokemons:
         return {
            ...state,
            allPokemons: action.payload,
            filterPokemons: action.payload,
         }

      case types.refreshAllPokemon: {
         return {
            ...state,
            filterPokemons: state.allPokemons
         }
      }
         
      case types.getTypes: 
         return {
            ...state,
            typesPokemons: action.payload,
         }

      case types.searchPokemon:
         return {
            ...state,
            filterPokemons: [action.payload],
         }

      case types.typeSearchPokemon:
         return {
            ...state,
            filterPokemons: action.payload === 'all' 
               ? state.allPokemons 
               : state.allPokemons.filter(pokemon => pokemon.types.map(type => type.name).includes(action.payload))
         }

      case types.searchPokemonById:
         return {
            ...state,
            activePokemon: action.payload,
         }

      case types.clearActivePokemon:
         return {
            ...state,
            activePokemon: {},
         }

      case types.abcOrderPokemon: 
         let pokemons = [];
         if(action.payload === 'asc'){
            pokemons = state.allPokemons.sort((a,b) => {
               if(a.name > b.name) return 1
               if(b.name > a.name) return -1
               return 0
            })
            return{
               ...state,
               filterPokemons: pokemons
            }
         }

         if(action.payload === 'desc'){
            pokemons = state.allPokemons.sort((a,b) => {
               if(a.name > b.name) return -1
               if(b.name > a.name) return 1
               return 0
            })
            return {
               ...state,
               filterPokemons: pokemons
            }
         }

         return {
            ...state,
            filterPokemons: state.allPokemons
         }

      case types.attackOrderPokemon:
         return {
            ...state,
            filterPokemons: action.payload === 'higth'
               ? state.allPokemons.sort((a,b) => {
                  if(a.attack > b.attack) return -1
                  if(b.attack > a.attack) return 1
                  return 0
               })
               : state.allPokemons.sort((a,b) => {
                  if(a.attack > b.attack) return 1;
                  if(b.attack > a.attack) return -1;
                  return 0
               })
         }

         case types.apiOrDbCreatedPokemon:
            let pokemonOrder = []
            if(action.payload === 'api'){
               pokemonOrder = state.allPokemons.filter(pokemon => !pokemon.db)
            }else{
               pokemonOrder = state.allPokemons.filter(pokemon => pokemon.db)
            }
            return{
               ...state,
               filterPokemons: pokemonOrder,
            }

         case types.createPokemon:
            return{
               ...state
            }
         
      default:
         return state;
   };
};