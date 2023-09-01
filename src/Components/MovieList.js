import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({movie,inputsearch,inputstars}) => {


  return (
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginTop:"10px"}}>
        {movie.filter(moviee=>inputstars!==0?(moviee.title.toUpperCase().includes(inputsearch.toUpperCase().trim()) 
        || moviee.description.toUpperCase().includes(inputsearch.toUpperCase().trim())) && moviee.rate===inputstars:moviee.title.toUpperCase().includes(inputsearch.toUpperCase().trim()) 
        || moviee.description.toUpperCase().includes(inputsearch.toUpperCase().trim())).map(moviee=><MovieCard moviee={moviee} key={moviee.id}/>)}
    </div>
    
  )
}

export default MovieList