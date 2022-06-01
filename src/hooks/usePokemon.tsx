import { useEffect, useState } from 'react'
import { fetchAllPokemones } from '../helpers/fetchAllPokemones';
import { Pokemon } from '../interface/reqResp';

export const usePokemon =() => {
  
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
   fetchAllPokemones()
   .then(pokemons => {
      setPokemons(pokemons)
   })
   .catch(console.log)
  }, [])

  return {
   pokemons
  }
}

