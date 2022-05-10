export const types = {
   // eventos de pokemonReducer
   loadAllPokemons: '[pokemon] cargar los pokemons',
   getTypes: '[pokemon] cargar los typos de pokemons',
   searchPokemon: '[pokemon] buscar un pokemon',
   typeSearchPokemon: '[pokemon] filtrar por tipo',
   searchPokemonById: '[pokemon] filtrar por id',
   clearActivePokemon: '[pokemon] limpiar el active pokemon',
   abcOrderPokemon: '[pokemon] ordenar los pokemons segund su nombre',
   attackOrderPokemon: '[pokemon] ordernar segun su poder de ataque',
   apiOrDbCreatedPokemon: '[pokemon] ordernar por tipo de creacion',
   createPokemon: '[pokemon] crear un pokemon',
   refreshAllPokemon: '[pokemon] refresh all pokemons',

   uiSetLoading: '[ui] set loading',
   uiRemoveLoading: '[ui] remove loading',
   uiSetMsgError: '[ui] set msg error',
   uiRemoveMsgError: '[ui] remove msg error',
   uiSetMsg: '[ui] set msg',
   uiRemoveMsg: '[ui] remove msg'
};