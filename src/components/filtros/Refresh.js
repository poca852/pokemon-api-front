import React from "react";
import { useDispatch } from "react-redux";
import { refreshAllPokemons } from "../../actions/pokemons";

export const Refresh = () => {
  const dispatch = useDispatch();

  const handleRefresh = () => {
    dispatch(refreshAllPokemons());
  };

   return (
      <button onClick={handleRefresh}>
         Refresh All
      </button>
   );
};
