import React, { useState } from 'react'
import { Pokemon } from '../interface/reqResp';
import { usePokemon } from './usePokemon';
import { ChangeEvent } from 'react';

export const usePaginacionPokemones = () => {
   const { pokemons } = usePokemon();
   const [ paginaActual, setPaginaActual ] = useState(0);
   const [ search, setSearch ] = useState('');

   const filtersPokemon = ():Pokemon[] => {
     if ( search.length === 0)
      return pokemons.slice(paginaActual, paginaActual + 8); 

      const filtered = pokemons.filter( poke => poke.name.includes( search ));
      return filtered.slice(paginaActual, paginaActual + 8);
   }
  
   const paginaSiguiente = () => {
      if (paginaActual > 0 )
      setPaginaActual ( paginaActual + 8 )
   }

   const paginaAnterior = () => {
      setPaginaActual ( paginaActual - 8 )
   }

   const buscandoPokemon = ({ target }:ChangeEvent<HTMLInputElement>) => {
     setPaginaActual(0);
     setSearch( target.value )
   }

   return {
      buscandoPokemon,
      filtersPokemon,
      paginaSiguiente,
      paginaAnterior,
      search
   } 

}
