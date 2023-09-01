import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import moviedata from './Components/DataMovie';
import { useState } from 'react';
import NavBr from './Components/NavBr';
import AddMovie from './Components/AddMovie';
import NetFli from './NetFli';




function App() {
  const [movie,setMovie]=useState(moviedata)
  const [inputsearch,setInputSearch]=useState("")
  const [inputstars,setInputStars]=useState(0)
  
  const AddMovi =(movies)=>{
    setMovie([...movie,movies])
  }

 

  return (
    <div className="App">
       <NetFli />
        <NavBr setInputSearch={setInputSearch} setInputStars={setInputStars}/>
        <AddMovie AddMovi={AddMovi} />
        <MovieList movie={movie} inputsearch={inputsearch} inputstars={inputstars}/>
        

    </div>
  );
}

export default App;
