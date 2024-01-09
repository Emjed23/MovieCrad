
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Header from './components/Header';
import { useState } from 'react';
import Movielist from './components/MovieList';
import { Data } from './Data';
import Trailer from './components/Trailer';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
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

    <Header add={AddNewMovie} />
 {/* <NavigationBar getSearch={getSearch} getRate={getRate} /> */}
 <Search getSearch={getSearch} getRate={getRate}/>
{/* <Movielist  Movie={Movie} search={search} rate={rate}/>   */}
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieList" element={<Movielist Movie={Movie} search={search} rate={rate} />}/>
        <Route path="/movie/:id" element={ <Trailer Movie={Movie} /> } />
      </Routes>
</body>
  </div>
   );
}

export default App;