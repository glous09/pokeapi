
import { usePaginacionPokemones } from '../hooks/usePaginacionPokemones';

export const Pokemones =() => {

 const { buscandoPokemon,filtersPokemon, 
   paginaSiguiente, paginaAnterior, search } =  usePaginacionPokemones();

  return (
     <>
    <div className="container">
       <div className="row">
          <div className="s12">
            <div className="row center-align">
               <nav>
                  <div className="nav-wrapper">
                     <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
                  </div>
                  <div className='col s4'>
                     <input type="text"
                     className='form-control'
                     placeholder='Buscar pokemon'
                     value={ search }
                     onChange={ buscandoPokemon } />
                  </div>  
            </nav>
         </div>  
        
    
        <div className="row">
           {filtersPokemon().map(({ id, name, pic }) => (
              <div className="col s3">
                 <div className="card hoverable card-panel grey lighten-5" key={id}>
                    <div className="waves-block waves-light center-align">
                       <img className="activator" src={pic} alt={name}
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
                       <p># {id}</p>
                    </div>
                 </div>
              </div>
           ))}
           <div className="row">
              <div className="col-12 center-align">
                 <a onClick={ paginaSiguiente } className="waves-effect waves-light btn center-align" style={{ width: 120, }}>Siguiente</a>
                 <a onClick={ paginaAnterior } className="waves-effect waves-light btn center-align" style={{ width: 120, marginLeft: 5, }}>Anterior</a>
              </div>
           </div>
         </div> 
        </div>
      </div>
    </div>
   </>
  )
}


  

