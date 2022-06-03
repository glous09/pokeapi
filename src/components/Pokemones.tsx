import { ChangeEvent, useState } from 'react';
import { usePokemon } from '../hooks/usePokemon'
import { Pokemon } from '../interface/reqResp'
import { Nav } from '../components/Nav';

export const Pokemones =() => {
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
      if (pokemons.filter( poke => poke.name.includes( search )).length > paginaActual + 8  )
      setPaginaActual ( paginaActual + 8 )
   }

   const paginaAnterior = () => {
      setPaginaActual ( paginaActual - 8 )
   }

   const buscandoPokemon = ({ target }:ChangeEvent<HTMLInputElement>) => {
     setPaginaActual(0);
     setSearch( target.value )
   }

  return (
     <>
    <Nav/>
    <div className="container">
       <div className="row">
          <div className="s12">
            <div className="row center-align">
               <div className="col s4">
                  <h4>Pokemon</h4>
               </div>
               <div className='col s4'>
                  <input type="text" className='form-control'
                  placeholder='search pokemon'
                  value={ search }
                  onChange={ buscandoPokemon } />
               </div>
               <div className="row">
                  <div className="col-12 center-align">
                     <a onClick={paginaAnterior} 
                        className="waves-effect waves-light btn center-align"
                        style={{ width: 120, marginLeft: 5, }}>
                           Anterior
                     </a>
                     <a onClick={paginaSiguiente} 
                        className="waves-effect waves-light btn center-align" 
                        style={{ width: 120, }}>
                           Siguiente
                     </a>  
                  </div>
            </div>  
         </div>
        
    
        <div className="row">
           {filtersPokemon().map(({ id, name, pic, url}) => (
              <div className="col s3">
                 <div className="card hoverable card-panel grey lighten-5" key={ id }>
                    <div className="waves-block waves-light center-align">
                       <img className="activator" src={ pic } alt={ name }
                          style={{ width: 120 }} />
                    </div>
                    <div className="card-content" style={{ marginTop: 0, paddingTop: 0, }}>
                       <span className="card-title activator grey-text text-darken-4 center-align">
                          {name}
                          <i className="material-icons right"></i>
                       </span>
                       {/* <p><a href="#">This is a link</a></p> */}
                    </div>
                    <div className="card-reveal">
                       <span className="card-title grey-text text-darken-4">
                          <i className="material-icons right">x</i></span>
                       <p># { id }</p>
                    </div>
                 </div>
              </div>
           ))}
         </div> 
        </div>
      </div>
    </div>
   </>
  )
}


  

