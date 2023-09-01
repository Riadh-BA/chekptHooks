import React from 'react'
import DataMovie from './Components/DataMovie';
import MovieList from './Components/DataMovie';
import { useState } from 'react';

const Filter = () => {
    const [search, setNewSearch] = useState("");

    const handleSearchChange = (e) => {
      setNewSearch(e.target.value);
  };
  
  const filtered = !search
      ? DataMovie : DataMovie.filter((movie) =>movie.title)
        
  
      
  return (
    <div>
        <input type="text" value={search} onChange={handleSearchChange} />
        <MovieList {...filtered.map((movie) => {<p key={movie.id}>{movie.title} || {movie.rate}</p>})} />
    </div>
  )
}

export default Filter