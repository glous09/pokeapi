import { reqResApi } from "../api/reqRes"
import { Pokemon, PokemonResp, Result} from '../interface/reqResp';

export const fetchAllPokemones = async(): Promise<Pokemon[]> => {
    //llamando a todos los pokemones
   const resp = await reqResApi.get<PokemonResp>('/pokemon?limit=1200');
   const ResultsPokemon = resp.data.results;

   return listItemPokemon( ResultsPokemon );
}

  const listItemPokemon = ( resultPokemon: Result[] ): Pokemon[] => {
    const pokemonArr: Pokemon[] = resultPokemon.map( poke => {

    const pokemonArr = poke.url.split('/');
    //sacando Id 
    const id = pokemonArr[6];
    //Obteniendo imágen
    const pic =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    return {
        id,
        pic,
        name:poke.name,
        url: poke.url
    }  
 })
 console.log(pokemonArr);
    
 return pokemonArr;
 
}