import React from "react";
import MovieCards from "./MovieCards";


const Movielist = ({Movie,search,rate}) => {

  return (
   
     <div className="card-container">
      {/* {Movie.map((Movie)=>
   <MovieCards Movie={Movie}/>)} */}
   
   
   {Movie.filter((elF)=> elF.rate>=rate && elF.title.toLowerCase().includes(search)).map((Movie)=>
   <MovieCards Movie={Movie}/>)}
   
</div>
 
 )}
export default Movielist