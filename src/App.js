
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Header from './components/Header';
import { useState } from 'react';
import Movielist from './components/MovieList';
import { Data } from './Data';
import Search from './components/Search';



function App(){

const [Movie,setMovie]=useState(Data)
  const AddNewMovie=(newMovie)=>{
    setMovie([...Movie,newMovie])
  }

  const [search, setSearch] = useState("")
  const getSearch=(search)=>{
setSearch(search)
  }
  const [rate, setRate] = useState("")
  const getRate=(rate)=>{
setRate(rate)
  }
  console.log(rate)
  
  return ( 
  <div>
    <body>

 <Header add={AddNewMovie}/>
 <Search getSearch={getSearch} getRate={getRate}/>
<Movielist  Movie={Movie} search={search} rate={rate}/>
</body>
  </div>
   );
}

export default App;