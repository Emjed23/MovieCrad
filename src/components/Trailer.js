import React from 'react'
import Iframe from 'react-iframe'
import { useParams } from 'react-router-dom'

const Trailer = ({Movie}) => {
    const {id}=useParams()
    const movie=Movie.find((el)=>el.id==id)
    console.log(movie)
  return (
    <div>
    <Iframe src={movie.trailer}
     width="640px"
     height="320px"
     id=""
     className=""
     display="block"
     margin-top='60 px'
    //  position="center"
    
     justify-content='center' >  </Iframe>
    </div>
  )
}
export default Trailer
// }
//  width='1280' height='720'
// export default Trailer