import { pokemonReducer } from "./pokemonReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = {
   ui: uiReducer,
   pokemons: pokemonReducer
}