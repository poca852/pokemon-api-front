import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../../actions/pokemons';
import './Search.css';

export const Search = () => {

   const dispatch = useDispatch()
   const [input, setInput] = useState('');

   const inputChange = ({target}) => {
      setInput(target.value)
   } 
   
   const resetInput = () => {
      setInput('')
   }
   
   const handleSearch = (e) => {
      e.preventDefault();
      if(input.length !== 0){
         dispatch(searchPokemon(input))
         resetInput()
      }
   }
   return (
      <form onSubmit={handleSearch} autoComplete='off'>
         <input type='search'
            placeholder='Search a Pokemon'
            name='input'
            value={input}
            onChange={inputChange}
         />
         <button>Search</button>
      </form>
   )
}
