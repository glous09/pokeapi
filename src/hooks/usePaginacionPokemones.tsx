import React, { useRef, useState } from 'react'
import { reqResApi } from "../api/reqRes"
import { Pokemon, PokemonResp, Result } from '../interface/reqResp';
import { useEffect } from 'react';

export const usePaginacionPokemones = () => {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ pokemonList, setPokemonList ] = useState<Pokemon[]>([]);
  const paginaSiguiente = useRef('https://pokeapi.co/api/v2/pokemon?limit=12');


  const loadPokemons = async() => {

       setIsLoading(true);
       const resp = await reqResApi.get<PokemonResp>(paginaSiguiente.current); 
       
       paginaSiguiente.current = resp.data.next;
       mapPokemonList( resp.data.results )
  }

  const mapPokemonList = (  resultPokemon:Result[] ) => { 
        const pokemonArr: Pokemon[] = pokemonList.map( poke => {
        //lo convierte en arreglo y corta el /
        const pokemonArr = poke.url.split('/');
         const id = pokemonArr[6];
         const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        
         return { 
            id,
            pic,
            name: poke.name,
            url: poke.url
         }    
     });
     console.log(pokemonArr);
     return pokemonArr;
  }

  useEffect(() =>{
    loadPokemons()
  }, [])


   // const { pokemons } = usePokemon();
   // const [ paginaActual, setPaginaActual ] = useState(0);
   // const [ search, setSearch ] = useState('');

   // const filtersPokemon = ():Pokemon[] => {
   //   if ( search.length === 0)
   //    return pokemons.slice(paginaActual, paginaActual + 8); 

   //    const filtered = pokemons.filter( poke => poke.name.includes( search ));
   //    return filtered.slice(paginaActual, paginaActual + 8);
   // }
  
   // const paginaSiguiente = () => {
   //    if (paginaActual > 0 )
   //    setPaginaActual ( paginaActual + 8 )
   // }

   // const paginaAnterior = () => {
   //    setPaginaActual ( paginaActual - 8 )
   // }

   // const buscandoPokemon = ({ target }:ChangeEvent<HTMLInputElement>) => {
   //   setSearch( target.value )
   // }

   return {
      //buscandoPokemon,
     //filtersPokemon,
      paginaSiguiente,
      pokemonList,
      mapPokemonList
     // paginaAnterior,
     // search
   } 

}
